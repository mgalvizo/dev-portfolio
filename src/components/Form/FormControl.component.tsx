import { JSX } from 'react';
import { PiWarningCircle } from 'react-icons/pi';
import {
    StyledFormControl,
    StyledFormControlInputContainer,
    StyledFormControlWarning,
    StyledFormControlErrorMessage,
} from '../styled/Form/FormControl.styled';

interface FormControlProps {
    children?: JSX.Element;
    labelText?: string;
    errorMessage?: string;
}

const FormControl = ({
    children,
    labelText,
    errorMessage,
}: FormControlProps) => {
    return (
        <StyledFormControl>
            <label className="visually-hidden" htmlFor={children?.props?.id}>
                {labelText}
            </label>
            <StyledFormControlInputContainer
                className={errorMessage ? 'error' : ''}
            >
                {children}
                {errorMessage && (
                    <StyledFormControlWarning>
                        <PiWarningCircle />
                    </StyledFormControlWarning>
                )}
            </StyledFormControlInputContainer>
            {errorMessage && (
                <StyledFormControlErrorMessage>
                    {errorMessage}
                </StyledFormControlErrorMessage>
            )}
        </StyledFormControl>
    );
};

export default FormControl;
