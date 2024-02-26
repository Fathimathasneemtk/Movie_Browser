import Hero from "./Hero"
const Home=()=>{
    return(
        <div>
            <Hero text="This is Home"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-6"></div>
                    <p className="lead">
                    Explore your favorite movies or TV shows with our search feature.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Home 