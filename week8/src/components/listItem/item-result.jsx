import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

const MovieBox = styled.div`
    width: 80%;
    padding: 0.5vw;
    margin: 1vw;
    position: relative;
    cursor: pointer;
`

const Poster = styled.img`
    width: 100%;
    height: 15vw;
`

const MovieBoxBottom = styled.div`
    width: 100%;
    height: 4vw;
    padding-top: 0.5vw;
    background-color: #383B67;
    display: flex;
    justify-content: center;
`

const SubTitle = styled.p`
    font-size: 0.6vw;
    color: #FFFFFF;
`

const OverExplain = styled.div`
    position: absolute;
    top: 2%;
    left: 3.5%;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.8;
    color: white;
    font-size: 0.5vw;
    width: 93%;
    height: 96%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: none;
`;

const OverTitle = styled.p`
    padding: 0.5vw;
    font-size: 0.6vw;
`;

const OverView = styled.p`
    padding: 0.5vw;
    padding-right: 0.5vw;
`;

const ItemResult = ({id, poster, original_title, title, rating, overview, release_date}) => {
    const navigate = useNavigate();
    const params = useParams();

    const handleClick = () => {
        navigate(`/movie/${original_title}`, { state: { movie: { id, poster, title, rating, overview, release_date } } });
    };


    // explain 보이기
    const handleMouseOver = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'block';
    };

    // explain 안보이기
    const handleMouseOut = (e) => {
        e.currentTarget.querySelector('.overExplain').style.display = 'none';
    };

    return (
        <MovieBox key={id} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>
            <Poster src={poster} alt="poster"/>
            <MovieBoxBottom>
                <div className="titleBox" style={{display: "flex", justifyContent: "space-between", alignItems:"flex-start", width: "90%"}}>
                    <SubTitle style={{width: "70%"}}>{title}</SubTitle>
                    <div className="rating" style={{display: "flex", alignItems: "center", gap: "0.2vw"}}>
                        <FaStar style={{width: "0.5vw", height: "0.5vw", color: "#FFCC15"}}/>
                        <SubTitle>{rating}</SubTitle>
                    </div>
                </div>
            </MovieBoxBottom>

            <OverExplain className="overExplain">
                <OverTitle>{title}</OverTitle>
                <OverView>{overview}</OverView>
            </OverExplain>
        </MovieBox>
    );
};

export default ItemResult;