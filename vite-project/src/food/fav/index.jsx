import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../recipie"

export default function Fav(){
    const {fav}=useContext(GlobalContext)
    return(
        <div style={{  display: "grid",  gridTemplateColumns: "repeat(4, 1fr)",  gap: "20px"


        }}>
            {
fav && fav.length >0 ?
    fav.map((item)=><RecipeItem item={item}/>):(
        <div><p>Ntg to be added</p></div>
    )

            }
        </div> 
    )
}