import styled from 'styled-components';

const StyledComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
`;

const StyledComponentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    flex-basis: var(--max-design-width);
`;

const StyledComponentContent = styled.div`
    flex-basis: var(--max-content-width);
`;

export { StyledComponent, StyledComponentContainer, StyledComponentContent };
