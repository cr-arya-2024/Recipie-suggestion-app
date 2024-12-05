import { useContext } from "react"
import { GlobalContext } from "../../context";
import RecipeItem from "../../recipie";

export default function Home(){

 const {recipie,loading}=useContext(GlobalContext);
 if(loading){
  <div>Plz Wait</div>
 }
    return(
        <div style={{ display: "grid",
          height: "100vh" ,
          placeItems: "center", gridTemplateColumns:" repeat(4, 1fr)" }}>
         {
          recipie && recipie.length >0 ? 
          recipie.map((item,index)=><RecipeItem key={index} item={item}/>)
          :<div style={{fontWeight:"bolder",fontSize:"2rem",display: "flex",
             justifyContent:"center",width:"90vw",
            alignItems: "center"}} >
          <b> NTG TO SHOW PLZ SEARCH ANYTHING</b>
          </div>
         }
        </div>
    )
}

