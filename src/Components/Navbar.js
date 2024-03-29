import {Link,useHistory} from 'react-router-dom'
const Navbar=({SearchText,SetSearchText,InputText,SetInputText})=>{
  const history=useHistory()
  const gotoSearch=(clicked)=>{
    clicked.preventDefault();
    history.push("/search")
    SetSearchText(InputText)
    SetInputText('')
  }
  const UpdateText=(e)=>{
    SetInputText(e.target.value)

  }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Movie Browser</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="go" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="go" tabIndex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
        // value={SearchText} 
        value={InputText}
        onChange={UpdateText}/>
        <button className="btn btn-outline-success" type="submit" onClick={gotoSearch}>Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}
export default Navbar