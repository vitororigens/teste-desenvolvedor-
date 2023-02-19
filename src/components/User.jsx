import {MdLocationPin} from 'react-icons/md'
import { Link } from 'react-router-dom'

import classes from './User.module.css'


const User  = ({
    login,
    avatar_url,
    name,
    bio,
    followers, 
    following, 
    location
}) => {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login}/>
        <h2>{login}</h2>
        {location &&(
            <p className={classes.location}>
            <MdLocationPin/>
            <span>{location}</span>
            </p> 
        )} 
        <p>{name}</p>
        <p>{bio}</p>  
        <div className={classes.stats}>
            <div>
                <p>Seguidores:</p>
                <p className={classes.number}>{followers}</p>
            </div>
            <div>
                <p>Seguindo:</p>
                <p className={classes.number}>{following}</p>
            </div>
        </div>
        <Link to={`/Repos`}>Ver melhores projetos</Link>
    </div>
  )
}

export default User