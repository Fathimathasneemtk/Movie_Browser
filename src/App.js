
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Search from './Components/Search'
import {useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import MovieView from './Components/MovieView'
import NotFound from './Components/NotFound';
function App() {
  const [SearchResults,SetSearchResults]=useState([])
  const [SearchText,SetSearchText]=useState('')
  const [InputText,SetInputText]=useState('')
  useEffect(()=>{
    // if (SearchText){
     
    // }
    fetch(`https://api.themoviedb.org/3/search/movie?query=${SearchText}&api_key=34d3bba3eaf0ac9193b5389a4f594c7e`)
    .then(response=>response.json())
    .then(data=>{
      SetSearchResults(data.results)
      
    })
    
  },[SearchText])


  

  return (
    <div className="App">
      <Navbar SearchText={SearchText} SetSearchText={SetSearchText}
      InputText={InputText} SetInputText={SetInputText}/>
      
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" component={About}/>
        <Route path="/search" exact>
          <Search keyword={SearchText} SearchResults={SearchResults}/>
        </Route>
        <Route path="/movie/:id" component={MovieView}/>
        <Route component={NotFound}/>
      </Switch>
      
    </div>
  );
}

export default App;
