import Hero from "./Hero"
import {Link} from 'react-router-dom'
const MovieCard=({movie})=>{
    const posturl=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const movie_path=`/movie/${movie.id}}`
    const postcheck=()=>{
        if (movie.poster_path){
            return <img src={posturl} className="card-img-top" alt={movie.original_title}/>

        }else{
            return <img src="https://bitsofco.de/img/Qo5mfYDE5v-350.png" className="card-img-top" alt={movie.original_title}/>
            
        }
    }
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">  
            {postcheck()}
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <Link to={movie_path} className="btn btn-primary">Show details</Link>
            </div>
            </div>
        </div>
    )
}
const Search=({keyword,SearchResults})=>{
    const checkresults=()=>{
        if (SearchResults.length >0){
            const resulthtml=SearchResults.map((obj,i)=>{
                return <MovieCard key={i} movie={obj}/>
                
            })
            return (
            <div>
                <Hero text={keyword}/>
                <div className="container">
                <div className="row">
                    {resulthtml}
                </div>
                </div>
            </div>)
        }else{
            return(<Hero text={`You are looking for ${keyword}, but no results..`}/> )
              
        }
    }
    
    

    return checkresults()
            
}

export default Search