import ItemMovie from "../listitem/item-movie";

const ListMovie = ({movie2}) => {
    return(
        <>
            {movie2.results.map((item) => (
                <ItemMovie
                    key={item.id}
                    id={item.id}
                    poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.title}
                    vote_average={item.vote_average}
                />

                

     ))}
        </>
    )
}

export default ListMovie;