import styled from 'styled-components';

const StyledForm = styled.form`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: var(--web-margin-xl);

    button {
        justify-self: end;
    }
`;

export default StyledForm;
