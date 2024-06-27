import styled from "styled-components";

const CreditContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Photo = styled.img`
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
`

const CreditP = styled.p`
    font-size: 1vw;
    color: white;
`

const ItemCredit = ({ id, name, image}) => {
    return (
        <CreditContainer key={id}>
            <Photo src={image} alt="profile"/>
            <CreditP>{name}</CreditP>
        </CreditContainer>
    )
}

export default ItemCredit;