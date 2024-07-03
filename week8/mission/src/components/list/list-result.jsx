import styled from "styled-components";
import ItemResult from "../listItem/item-result";

const ResultContainer = styled.div`
    width: 65%;
    max-height: 40vw;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 3vw auto;
    justify-content: center;
    background-color: #0A0E40;

    &::-webkit-scrollbar {
        width: 0.4vw;
        height: 10vw;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #FFCC15;
        border-radius: 0.5vw;
    }
`

const ListResult = ({searchResults}) => {
    return (
        <ResultContainer>
            {searchResults.map((item) => (
                <ItemResult 
                    key={item.id} 
                    id={item.id}
                    poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.original_title}
                    original_title={item.original_title}
                    release_date={item.release_date}
                    rating={item.vote_average.toFixed(1)}
                    overview={item.overview}
                />
            ))}
        </ResultContainer>
    )
}

export default ListResult;