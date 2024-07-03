import ListMovie from "../components/list/list-movie";
import PageContainer from "../styles/PageStyle";

const UpComingPage = () => {
    return (
        <PageContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/upcoming"/>
        </PageContainer>
    )
}

export default UpComingPage;