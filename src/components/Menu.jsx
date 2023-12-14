import { Link } from "react-router-dom";

function Menu () {
    return (
        <header>
        <ul>
        {/* hay que meter el link, elemento que sustituye al la etiqueta a de HTml */}
            <ol><Link to="/">Inicio</Link></ol>
            <ol><Link to="/list">Listado de las Bebidas</Link></ol>
        </ul>
        </header>
    );
}



export default Menu