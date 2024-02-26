import Hero from "./Hero"
const About=()=>{
    return(
        <div>
            <Hero text="This is About"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-6"></div>
                    <p className="lead">
                    
The movie browsing website is a valuable tool for exploring a wide range of movies and TV shows, providing users with detailed information including posters and overviews.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About