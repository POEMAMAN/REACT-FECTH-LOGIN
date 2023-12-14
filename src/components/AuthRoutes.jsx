import { Navigate, useLocation } from "react-router-dom";


function AuthRoutes (user, components // el componente que quiero cuando el usuario no exista//
) {
    const location = useLocation();

    console.log(location)

    if (user) return components;
    if (!user) return <Navigate to="/" state={{prevRoute:location.pathname}}/>
    //si tenemos elemento de login le mandariamos a login, el navigate es una redireccion dirtecta sin link

}

export default AuthRoutes;  