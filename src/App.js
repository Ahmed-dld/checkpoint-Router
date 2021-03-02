import './App.css';
import React, {useState} from 'react';
import MovieList from './Component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Action/Navbar';
import Footer from "./Action/Footer";
import Filter from './Component/Filter';
import MovieDescription from "./Component/MovieDescription";
import { v4 as uuidv4} from 'uuid';
import {Route, BrowserRouter } from 'react-router-dom';
import Routes from "./routes";
import Notfound from "./Component/Notfound";




const App = () => {
  const [movies,setMovies] = useState([
    { 
      id : uuidv4(),
      title:'Spenser Confidential',
      genre:'Thrillers d action,Aventure, drama',
      posteUrl:'https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfsyjdUpqdBZSnDBBBnas7H67irt7RmGIg8Wp6vgYmsSt8wsh1FwgtntOxFFnxakMu0eulQVxFQ-R7FVHKipMNxOuhh5.jpg?r=9f3',
      rate: 3,
      trailerURL :  "https://youtu.be/bgKEoHNi3Uc",
      description: 'Spenser, ex-flic et ex-escroc, sallie avec Hawk, un boxeur rêvant de passer pro, pour dévoiler un sombre complot lié à la mort de deux policiers de Boston.'
    },
    { 
      id : uuidv4(),
      title:'Zone hostile',
      genre:'Action et aventure,fantastique,Cyberpunk' ,  
      posteUrl:'https://www.netflix-news.com/wp-content/uploads/2021/01/zone-hostile-netflix-1280x640.jpg',
      rate: 1,
      trailerURL : "https://youtu.be/yIIVfylCso0",
      description: 'Dans le futur, un pilote de drone est déployé dans une zone militarisée meurtrière où il va travailler pour un officier androïde chargé d empêcher une attaque nucléaire.'
    },
    { 
      id : uuidv4(),
      title:'6 Underground',
      genre:'Action et aventure,Thrillers d action',  
      posteUrl:'https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSpi6zyMFHnndJ5bUEsz_qXxhaBrUZZwEnh0cgx0CCbbdiVlhR9uWS25WgogB6LQGeehyRjOyxtivXsv7Ztpz-IkY_jz8Ct4AS9IeL4WiMT942cgZYZbiIqA97xO2g.jpg?r=074',
      rate: 2.5,
      trailerURL : "https://youtu.be/YLE85olJjp8",
      description: 'Un milliardaire confie à une équipe d agents internationaux qui ont simulé leur propre mort une mission risquée et sanglante destinée à neutraliser un violent dictateur.'
    },
    { 
      id : uuidv4(),
      title:'Prison Break',
      genre:'Serie américaine :crime, dramatique, policière' ,  
      posteUrl:'https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg',
      rate: 4,
      trailerURL : "https://www.youtube.com/embed/AL9zLctDJaU",
      description: 'Son frère injustement accusé de meurtre, un ingénieur en génie civil décide de le faire évader du fameux pénitencier de Fox River.'
    },
    ]);
     
    const [filterRate, setFilterRate] = useState(1);

    const [searchValue, setSearchValue] = useState("");

    const search = (inputValue) =>{
      setSearchValue(inputValue);
    }

    const addNewMovie =(movie) =>{
      setMovies(movies.concat(movie));
    }
 
  return (
    <div className="App">
    <BrowserRouter>
      <Route path="/" render={() => <Navbar filterRate ={filterRate} setFilterRate={setFilterRate} search={search}/>} />
      <Route  path="/" exact render={() => <MovieList movies ={movies.filter((movie)=>movie.rate >=filterRate && movie.title.toLowerCase().includes(searchValue.toLowerCase().trim()))}
      addNewMovie={addNewMovie} />} />
      <Route exact path="/moviedescription/:id" render= {(props)=> <MovieDescription movies={movies} {...props}/>}   />
      <Route  path="/" component={Footer} />
      
      </BrowserRouter>  
  </div>
  );
}
export default App ;