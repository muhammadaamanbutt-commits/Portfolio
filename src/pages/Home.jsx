import { use, useState } from "react";
import MovieCard from "../components/MovieCard"

function Home() {

    const [searchresult, setsearchresult] = useState("");

    const handlesearch = (e) => {
        alert(searchresult);
    }

    const movie = [
        { id: 1, title: "a", releasedate: "1" },
        { id: 1, title: "b", releasedate: "2" },
        { id: 1, title: "c", releasedate: "3" },
    ]

    return (
        <div className="homepage">

            <div className="form">
                <input type="text" placeholder="Search MOVIE" className="search" value={searchresult} onChange={e => setsearchresult(e.target.value)}/>
                <button onClick={handlesearch} type="submit" className="searchbtn">Search</button>
            </div>

            <div className="homegrid">
                {movie.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                )
                )}
            </div>
        </div>
    )

}

export default Home;