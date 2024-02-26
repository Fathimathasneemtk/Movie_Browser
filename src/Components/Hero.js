const Hero=({text,backdrop})=>{
    return(
        <header className="bg-dark text-white p-5 backdrop-container">
            <h2 className="backdrop-text">{text}</h2>
            <div className="hero-backdrop" style={{backgroundImage:`url(${backdrop})`}}></div>
            

        </header>
    )
}
export default Hero