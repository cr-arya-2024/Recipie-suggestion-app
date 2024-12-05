import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context";

export default function Details() {


    const { id } = useParams()


    const { recipieDetailsData, setrecipieDetails,AddTofav } = useContext(GlobalContext)

    useEffect(() => {
        async function getRecipeDetails() {
            const resopnse = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = await resopnse.json()
           if(data.data){
            setrecipieDetails(data.data.recipe)
           }

        }
        getRecipeDetails()
    }, [])
    
console.log(recipieDetailsData);

    return (
        <div style={{display:'flex',flexDirection:"row"}}>
            <div>
<img style={{height:"60vh",width:"40vw",margin:"60px",backgroundSize:"contain",borderRadius:"14px",cursor:"pointer"}} src={recipieDetailsData.image_url}/>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <h2>{recipieDetailsData.publisher}</h2>
            <button onClick={()=>AddTofav(recipieDetailsData)} style={{height:"47px",padding:"10px 20px",backgroundColor:"black",color:"white",fontSize:"1.3rem",fontWeight:"bolder",borderRadius:"15px"}}>Add to Favorites</button>
                <h1>{recipieDetailsData.title}</h1>
                <div >
                <h3>Ingredients:<ul style={{display:"block",fontSize:"0.8rem",fontWeight:"lighter"}}>
                    {
                        recipieDetailsData.ingredients.map((item,index)=><li key={index}><p>{item.quantity} {item.unit} { item. description}</p></li>)
                    }
                </ul>
                </h3>
                </div>
            </div>
        </div>
    )
}