import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [serachPara, setSearchPara] = useState("")
    const [recipie, setRecipie] = useState([])
    const [loading, setLoading] = useState(false)
    const [recipieDetailsData, setrecipieDetails] = useState("")
    const [fav, setFav] = useState([])
    async function handlesubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const resopnse = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${serachPara}`)
            const data = await resopnse.json()
            console.log(data);

            if (data) {
                setRecipie(data.data.recipes)
                setLoading(false)
                setSearchPara("")
            }
        } catch (e) {
            console.log(e);
            setLoading(false)

        }
       

    }
    function AddTofav(currentId) {
        console.log(currentId);
        const cpyFav = [...fav]
        const index = cpyFav.findIndex(item => item.id === currentId.id)
        if (index === -1) {
            cpyFav.push(currentId)
        } else {
            cpyFav.splice(index)
        }
        setFav(cpyFav)
    }
    console.log(fav);

    return <GlobalContext.Provider value={{ serachPara, recipie, setSearchPara, handlesubmit, loading, recipieDetailsData, setrecipieDetails, AddTofav,fav }}>{children}</GlobalContext.Provider>
}