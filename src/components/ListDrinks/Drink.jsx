import propTypes from "prop-types";
function Drink ({oneDrink}) {
    return (
        <article>
        <img className="imgDrinks" src={oneDrink.strDrinkThumb} alt="" />
        <h5>{oneDrink.strDrink}</h5>
        <p>{oneDrink.strAlcoholic}</p>
        </article>
    );
}

Drink.propTypes = {
    oneDrink: propTypes.array

}

export default Drink

