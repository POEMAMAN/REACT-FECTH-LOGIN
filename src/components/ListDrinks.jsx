import propTypes from "prop-types";
import Drink from "./ListDrinks/Drink";
import { Link } from "react-router-dom";

function ListDrinks({ drinks }) {
    const elementLi = drinks.map((oneDrink) => {
        return (
        <li key={oneDrink.idDrink}>
            <Link to ={`/detail/${oneDrink.strDrink}/${oneDrink.idDrink}`}>
            <Drink oneDrink={oneDrink} />
            </Link>
            {/* Para poner un enlace externo se usa la ETIQUETA A
            <a href="" target=Blank */}
        </li>
        );
    });



    return (
        <ul>
        {elementLi}
        </ul>
    );
}

Drink.propTypes = {
    oneDrink: propTypes.object
}
ListDrinks.propTypes = {
    drinks: propTypes.array
}

export default ListDrinks