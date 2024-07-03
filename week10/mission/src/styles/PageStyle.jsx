import styled from "styled-components";

const PageContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 6vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.background ? `url(${props.background})` : 'none'};
    background-size: cover;
    background-position: center;
`;

export default PageContainer;