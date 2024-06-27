import React, { useState, useEffect } from "react";
import ListMovie from "../components/list/list-movie";
import PageContainer from "../styles/PageStyle";
import Pagination from "../components/PopularPage/Pagination";

const PopularPage = () => {
    const [pagingPage, setPagingPage] = useState(1);

    const handlePageChange = (newPage) => {
        setPagingPage(newPage);
    };

    useEffect(() => {
        console.log(pagingPage);
    }, [pagingPage]);

    return (
        <PageContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/popular" pagingPage={pagingPage}/>
            <Pagination Url="https://api.themoviedb.org/3/movie/popular" onPageChange={handlePageChange}/>
        </PageContainer>
    )
}

export default PopularPage;