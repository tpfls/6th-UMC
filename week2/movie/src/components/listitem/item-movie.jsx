import styled from 'styled-components'

const BigBox = styled.div`
    width:194px;
    position: relative;
    margin: 1vw 0.5vw;
    cursor: pointer;
    
`
const TopBox = styled.div`
    width:194px;
    height:251.59px;
    background:#D9D9D9;
    border-radius:10px 10px 0px 0px;

`
const BottomBox = styled.div`
    width:194px;
    height:77.41px;
    background:#383B67;
    border-radius:0px 0px 10px 10px;
    justify-content:center;
    display:flex;
    padding-top:5px;
`

const TitleBox = styled.div`
    width:90%;
    
    display: flex;
    justify-content:space-between;
`

const Title =styled.p`
    font-weight:400;
    font-size:12px;
    color:#FFFFFF;
`
const Image1 = styled.img`
    width:100%;
    height:100%;
`

const ItemMovie = ({key,id,poster,vote_average,title}) => {
    return(
        <>
        <BigBox>
            
            <TopBox>
                <Image1 src={poster} alt="asdf">
                </Image1>
            </TopBox>
            <BottomBox>
                <TitleBox>
                    <Title>{title}</Title><Title>{vote_average}</Title>
                </TitleBox>
            </BottomBox>

        </BigBox>
        </>
    ) 
}

export default ItemMovie;