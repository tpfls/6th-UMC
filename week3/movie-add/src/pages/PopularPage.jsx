import ListMovie from "../components/list/list-movie";
import PageContainer from "../styles/PageStyle";

const PopularPage = () => {
    return (
        <PageContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/popular"/>
        </PageContainer>
    )
}

export default PopularPage;