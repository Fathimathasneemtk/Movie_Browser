import Hero from "./Hero"
const Home=()=>{
    return(
        <div>
            <Hero text="This is Home"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-6"></div>
                    <p className="lead">
                    Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Home 