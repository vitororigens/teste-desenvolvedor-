import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

import classes from "./Repos.module.css";


function ListaDeRepositorios() {
  const { username } = useParams();
  const [repositorio, setRepositorio] = useState([]);

  useEffect(() => {
    async function carregaRepositorios(username) {


      const res = await fetch(`https://api.github.com/users/${username}/repos`)

      const repositorios = await res.json()

      setRepositorio(repositorios)

    }
    carregaRepositorios(username);
  }, [])



  return (
    <>
      <div className={classes.repos}>
        <h2>Repositórios do usuário {username}</h2>
        {repositorio && repositorio.length === 0 && <p>usuário não tem repositório</p>}
        <div className={classes.repos_container}>
          {repositorio.map(repositorio => (

            <div className={classes.tag} key={repositorio.id}>
              <div>
                {repositorio.name}
                <p><BsCodeSlash />{repositorio.language}</p>
              </div>

              <div>
                <p>{repositorio.description}</p>
              </div>
              <div className={classes.stats}>
                <div>
                  <AiOutlineStar />
                  <span>{repositorio.stargazers_count}</span>
                </div>
                <div>
                  <AiOutlineFork />
                  <span>{repositorio.forks_count}</span>
                </div>

              </div>
              <a href={repositorio.html_url} target="_blank" className={classes.repo_btn}>
                <span>Ver código</span>

              </a>
            </div>


          ))}
        </div>

        <p></p>
      </div>
    </>
  );
}

export default ListaDeRepositorios
