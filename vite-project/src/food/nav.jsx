import { NavLink } from "react-router-dom";
import './nav.css'
import { useContext } from "react";
import { GlobalContext } from "../context";



export default function Nav() {

    const { serachPara, setSearchPara,handlesubmit } = useContext(GlobalContext);
   
    
    return (
        <nav style={{paddingBottom:"20px"}}>
            <h2 className="hello">
                <NavLink to={"/"}>FoodRecipe</NavLink>
            </h2>
            <form onSubmit={handlesubmit}>
            <input type="text"
                placeholder="Search..."
                value={serachPara}
               
                onChange={(e) => setSearchPara(e.target.value)}
            ></input>
            </form>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/fav'}>
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}