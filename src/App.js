import React,{useState} from "react";
import { Button } from "react-bootstrap";

function App() {

  const[user, setUser]= useState(null);

  //return<div>{user?<h1>Estas logeado</h1>:<h1>No estas logeado</h1>}</div>

  return(
    <div>
      <Button variant="primary">Primary</Button>{' '}
  </div>
  )
  
  
}
export default App;
