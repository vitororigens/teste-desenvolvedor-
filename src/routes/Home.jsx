
import Search from "../components/Search";

import {useState} from "react";
import User from "../components/User"; 
import Erro from "../components/Erro";

 
const Home = () => {
    const [user, setUser] = useState(null);
    const[error, setError] = useState(false);

    const loadUser = async (userName) => {
        setError(false);
        setUser(null);

        const res = await fetch (`https://api.github.com/users/${userName}`);

        const data = await res.json();

        if(res.status === 404){
            setError(true);
            return;
        }
        
        const{avatar_url, login, location,name, bio, followers, following} = data
        const userData = {
            avatar_url,
            login,
            location,
            name,
            bio,
            followers,
            following,
        };

        setUser(userData);
    }


    return <div>
                <Search loadUser={loadUser} />
                {user && <User {...user}/>}
                {error && <Error />}

            </div>;
            
};

export default Home;