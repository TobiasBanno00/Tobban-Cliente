import React,{useState} from "react";
import SingInSingUp from "./page/SingInSingUp"

function App() {

  const[user, setUser]= useState(null);

  return (
  <div>
    {user?<h1>Estas logeado</h1>:<div><SingInSingUp/></div>}
    </div>)
  
}
export default App;
