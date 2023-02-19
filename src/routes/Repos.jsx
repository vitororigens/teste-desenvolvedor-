import { useParams } from "react-router-dom";
import Repo from "../components/Repo";


const Repos = () => {
const{username} = useParams();

const [repos, setRepos] = useState(null);

  return (
    <div>alguma coisa
      
    </div>
  )
}

export default Repos