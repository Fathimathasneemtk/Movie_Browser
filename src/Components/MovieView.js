import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import Hero from "./Hero"
const MovieView=()=>{
    const {id}=useParams()
    const movie_path=`https://api.themoviedb.org/3/movie/${id}?api_key=34d3bba3eaf0ac9193b5389a4f594c7e`
    const [movieDetails,SetMovieDetails]=useState({})
    const [loading,SetLoading]=useState(true)
    useEffect(()=>{
        fetch(movie_path)
        .then(response=>response.json())
        .then(data=>{
            SetMovieDetails(data)
            SetLoading(false)
            
        })
    },[id])
    function renderMovieDetails(){
        if (loading){
            return <Hero text="Loading ..."/>
        }
        if (movieDetails){
            const posturl=`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            const backdropUrl=`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`
            const checkPost=()=>{
                if (movieDetails.poster_path){
                   return  <img src={posturl} alt="..." className="img-fluid shadow rounded"/>
                }else{
                    return <img src="https://bitsofco.de/img/Qo5mfYDE5v-350.png" className="img-fluid shadow rounded" alt="...."/>
                }
            }
            return ( 
                    <>
                        <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                        <div className="container my-5" >
                            <div className="row">
                                <div className="col-md-3">
                                    {checkPost()}
                                    
                                </div>
                                <div className="col-md-9" >
                                    <h2>{movieDetails.original_title}</h2>
                                    <p className="lead">
                                        {movieDetails.overview}
                                    </p>

                                </div>
                                
                            </div>
                        </div>
                    </>)
        }
    }
    return renderMovieDetails()
}
export default MovieView