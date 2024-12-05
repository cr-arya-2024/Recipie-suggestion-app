import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
    return <div style={{ display: "flex",justifyItems:"center",alignItems:"center", flexDirection: "column", width: "270px",overflow:"hidden", height: "400px", margin: "25px", boxShadow: "2px 2px 20px grey", gap: "5px", borderRadius: "30px" }}>
<div style={{height:"50%",width:'100%',overflow:"hidden"}}>
    <img style={{backgroundSize:"cover",overflow:"hidden"}}src={item.image_url} alt="recipe item"></img>
</div>
<div style={{display: "flex",justifyItems:"center",alignItems:"center", flexDirection: "column"}}>
    <span style={{fontSize:"1.2rem",fontWeight:"bolder",color:"blue"}}>
        {item.publisher}
    </span>
    <h5 style={{padding:"20px",alignContent:"center"}}>
        {item.title}
    </h5>
    <Link style={{background:"black",color:"white",padding:"10px 20px",borderRadius:"5px"}} to={`/details/${item.id}`}>Recipie Details</Link>
</div>
    </div>
}