import React, {useEffect, useState} from "react";
import NavBar from './NavBar';
import './App.css';
import MyGames from "./MyGames";
import AllGames from "./AllGames";
import GameCard from "./GameCard";


function App() {
  const BASE_URL = "http://localhost:9292"
  const [gamesArray, setGamesArray] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/games`)
    .then(r => r.json())
    .then(games => setGamesArray(games))
  }, [])


  return (
    <div>Loading Game ChangR
      <NavBar BASE_URL={BASE_URL}/>
      <AllGames gamesArray={gamesArray}/>
      <MyGames/>
    </div> 
  )
}

export default App;
