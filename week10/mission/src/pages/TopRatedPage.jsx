import ListMovie from "../components/list/list-movie";
import PageContainer from "../styles/PageStyle";

const TopRatedPage = () => {
    return (
        <PageContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/top_rated"/>
        </PageContainer>
    )
}

export default TopRatedPage;