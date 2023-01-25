import React,{useState, useEffect} from "react";
import SignInSignUp from "./page/register-login"
import {ToastContainer} from "react-toastify";
import {AuthContext} from "./utils/contexts"
import { isUserLogedApi } from "./api/auth";
import Routing from "./routes/Routing";

function App() {

  const[user, setUser]= useState(null);
  const[loadUser, setLoadUser]= useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);
  

  useEffect(() => {
    setUser(isUserLogedApi());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [refreshCheckLogin])
  
    if(!loadUser) return null;

  return (
  <AuthContext.Provider value={user}>
    {user?<Routing setRefreshCheckLogin={setRefreshCheckLogin} />:<SignInSignUp setRefreshCheckLogin= {setRefreshCheckLogin} />}

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

    </AuthContext.Provider>
    )
  
}
export default App;
