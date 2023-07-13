import { useForm } from 'react-hook-form';
import StyledForm from '../styled/Form/Form.styled';
import FormControl from './FormControl.component';
import Button from '../UI/Button.component';
import { EMAIL_REGEX } from '../../helpers/constants';
import { useCreateMessage } from '../../hooks/useCreateMessage';

export type FormData = {
    name: string | undefined;
    email: string | undefined;
    message: string | undefined;
    owner: string | undefined;
};

const defaultValues = {
    name: undefined,
    email: undefined,
    message: undefined,
    owner: undefined,
};

const Form = () => {
    const { isSending, sendMessage } = useCreateMessage();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ defaultValues });

    const onSubmit = (data: FormData): void => {
        sendMessage(data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    // const onError = (errors: FieldErrors): void => {
    //     return;
    // };

    return (
        <StyledForm
            // onSubmit={handleSubmit(onSubmit, onError)}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
        >
            <FormControl labelText="Name" errorMessage={errors?.name?.message}>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    disabled={isSending}
                    {...register('name', {
                        required: 'This field is required',
                    })}
                />
            </FormControl>
            <FormControl
                labelText="Email"
                errorMessage={errors?.email?.message}
            >
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    disabled={isSending}
                    {...register('email', {
                        required: 'This field is required',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Sorry, invalid format here',
                        },
                    })}
                />
            </FormControl>
            <FormControl
                labelText="Message"
                errorMessage={errors?.message?.message}
            >
                <textarea
                    id="message"
                    placeholder="Message"
                    rows={5}
                    cols={20}
                    disabled={isSending}
                    {...register('message', {
                        required: 'This field is required',
                    })}
                />
            </FormControl>
            <input
                type="hidden"
                {...register('owner', { value: 'adamkeyes' })}
            />
            <Button type="submit" disabled={isSending}>
                Send Message
            </Button>
        </StyledForm>
    );
};

export default Form;
