import React,{useState} from "react";
import SignInSignUp from "./page/SignInSignUp"
import {ToastContainer} from "react-toastify";

function App() {

  const[user, setUser]= useState(null);

  return (
  <div>
    {user?<h1>Estas logeado</h1>:<div><SignInSignUp/></div>}
    <ToastContainer               // le damos la posición y diferentes configuracion a los mensajes de éxito/error que verá el cliente
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>
    )
  
}
export default App;
