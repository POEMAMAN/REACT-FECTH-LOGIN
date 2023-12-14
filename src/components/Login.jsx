import { useState } from "react";




function Login ({changeUserLogin}) {
    const [userLogin, setUserLogin] = useState({});
    const handleInput = (event) => {
        const id = event.target.id;
        const value= event.target.value;
        console.log(id,value);
        setUserLogin({
            ...userLogin, //partimos de las propiedad de la variable de estado
            [id]: value, //para cada input por su id, tomame mel value que deje el usuario
        });
    };
    const handleClick = (event) => {
        event.preventDefault();
        changeUserLogin(userLogin);

    };

    return (
    <>
    <div>Login
    </div>
    <form action="">
        <label htmlFor="email">email</label>
        <input type="text" name="email" id="email" onChange={handleInput}></input>
        <label htmlFor="password" name="password"></label>
        <input type="password" name="password" id="password" onChange={handleInput}></input>
        <input type="submit" value="login" onClick={handleClick} ></input>
    </form>
    </>
    )
}

export default Login;