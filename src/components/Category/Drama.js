import React from 'react'
import { Link } from "react-router-dom"
const Drama = (props) => {
    console.log(props.searchdata, "action");
    return (
        <>
            <div className='container'>
                <h1>Genre Drama</h1>
                {
                    props.data ?
                        <div className='movie-container'>

                            {
                                props.data.map((item) => (
                                    item.genres.map((i) => (

                                        i == "Drama" ?
                                            <Link to={`movie/${item.id}`}>
                                                <div className='image-container'>
                                                    <img src={item.image.original} />
                                                </div>
                                            </Link>
                                            : ""
                                    ))
                                ))
                            }

                        </div> : props.searchdata ?
                            <div className='movie-container'>

                                {
                                    props.searchdata.map((item) => (
                                        item.show.genres.map((i) => (

                                            i == "Drama" ?
                                                <Link to={`movie/${item.id}`}>
                                                    <div className='image-container'>

                                                        <img src={item.show.image.original} />
                                                    </div>
                                                </Link>
                                                : ""
                                        ))
                                    ))
                                }

                            </div> : ""
                }


            </div>
        </>

    )



}

export default Drama



