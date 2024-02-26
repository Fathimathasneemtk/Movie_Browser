import Hero from "./Hero"
const About=()=>{
    return(
        <div>
            <Hero text="This is About"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-6"></div>
                    <p className="lead">
                    The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's De finibus bonorum et malorum.[7][8] The physical source may have been the 1914 Loeb Classical Library edition of De finibus, where the Latin text, presented on the left-hand (even) pages, breaks off on page 34 with "Neque porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...", suggesting that the galley type of that page was mixed up to make the dummy text seen today.[1
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About