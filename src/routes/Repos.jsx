import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Repo from "../components/Repo";


const Repos = () => {
const{username} = useParams();

const [repo, setRepo] = useState([])

useEffect(() => {
  const loadrepos = async function (username){


    const res = await fetch(`https://api.github.com/users/${username}/repos`);

   setRepo(await res.json())

    console.log(res)

    
  }
 loadrepos(username)
},{


})



  return (
    <div >
      <h2>Repositorios do usuário: {username}</h2>
     
    </div>
    
  )
}

export default Repos
