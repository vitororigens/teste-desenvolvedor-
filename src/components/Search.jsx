import React from 'react'
import {BsSearch} from 'react-icons/bs'

import {useState} from "react";

import classes from "./Search.module.css"

const Search = ({loadUser}) => {
  const [userName, setUsername] = useState("");

  const handleKeyDown = (e)=> {
    if(e.key === "Enter"){
      loadUser(userName);
    }
  }
  return (
    <div className={classes.search}>
        <h2>Busque por um usuário:</h2>
        <div className={classes.search_container}>
            <input type="text" placeholder="Digite o nome do usuário" 
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}/>
            <button onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search