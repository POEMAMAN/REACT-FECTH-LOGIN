import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";



function  Detail ({drinks}){
        //Usar uer Param para sacar los elementos de la ruta que se envia como parametros como el id y el name
        const {id} = useParams();
        const findDrink = drinks.find((eachDrink) => eachDrink.idDrink === id)
        console.log(findDrink)

    return (
        findDrink ? (
    <div>
        <h2>Detalle</h2>
        <img src={findDrink.strDrinkThumb} alt=""/>
        <h3>{findDrink.strDrink}</h3>
        <p>{findDrink.strCategory}</p>
    </div>)
    : <NotFound />
    )   
}
Detail.propTypes = {
    drinks: propTypes.array
}


export default Detail;