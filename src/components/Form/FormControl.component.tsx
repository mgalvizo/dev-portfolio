import { JSX } from 'react';
import { PiWarningCircle } from 'react-icons/pi';
import StyledFormControl from '../styled/Form/FormControl.styled';

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
            <div className={`input__container ${errorMessage ? 'error' : ''}`}>
                {children}
                {errorMessage && (
                    <span className="warning">
                        <PiWarningCircle />
                    </span>
                )}
            </div>
            {errorMessage && (
                <span className="errorMessage">{errorMessage}</span>
            )}
        </StyledFormControl>
    );
};

export default FormControl;
