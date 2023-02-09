import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
const Detail = () => {

    const [data, setdata] = useState();
    const [loading, setloading] = useState(true);


    const { id } = useParams();
    console.log(id, "id");
    ;
    const getmovieData = async () => {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const moviedata = await res.json();
        setdata([moviedata]);
        setloading(false);
    }
    useEffect(() => {
        getmovieData();

    }, [])

    return (

        <div>
            {
                console.log(data)
            }
            {
                loading ? "" : data.map((item) => (
                    <div className='container'>
                        <div className='movie-wrapper'>
                            <div className='detail-image-container'>
                                <img src={item.image.original} className="image-responsive" />
                            </div>
                            <div className='movie-info'>
                                <h2>Title : {item.name}</h2><p>Rating: {item.rating.average}</p>
                                <p>{item.ended} | {item.language}</p>
                                <p>Movie Description : {item.summary}</p>
                            </div>
                        </div>
                    </div>
                ))


            }

        </div>





    )
}

export default Detail