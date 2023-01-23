import React,{useState} from 'react';
import {Row, Col, Form, Button, Spinner} from "react-bootstrap";
import {values, size} from "lodash";                               // si tiene valores un array y tamaño
import {toast} from "react-toastify";                            // llama al contenedor para q se muestre la validacion o el error
import {isEmailValid} from "../../utils/validations"
import {ApiRegister} from "../../api/auth"
import "./FormDeRegistro.scss";

function FormDeRegistro(props) {

    const { setShowModal } = props;
    const [formData, setFormData] = useState(initialFormValue())
    const [signUpLoading, setSignUpLoading] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();       //no se actualize pagina cuando enviamos el Formulario
        console.log(formData);

        //---------------------------------------------------------------------------------------VALIDACIONES DE FORMULARIO Y ENVIO INFO A BD
        let validCount = 0
        values(formData).some(value =>{           // validamos cuantos inputs estan completos
            value && validCount++;               //Si value tiene valor se le suma a valid count
            console.log(validCount);
            return null
        })
    
        if(validCount!==size(formData)){            // size devuelve el tamaño del formulario data
            toast.warning("Completa todos los campos del formulario");
        }else if(!isEmailValid(formData.email)){               
            toast.warning("Email inválido")
        }else if (formData.password !== formData.repeatPassword) {
            toast.warning("Las contraseñas tienen que ser iguales");
        }else if (size(formData.password) < 6) {
            toast.warning("La contraseña tiene que tener al menos 6 caracteres");
        } else{
            setSignUpLoading(true)
            ApiRegister(formData).then(response=>{
                if (response.code){
                    toast.warning(response.message);
                }else{
                    toast.success("Registro correcto");
                    setShowModal(false)
                    setFormData(initialFormValue())
                }
            })
            .catch(()=>{
                toast.error("Error del servidor.")
            })
            .finally(()=>{
                setSignUpLoading(false);
            }

            )
            
        }
    }
    //--------------------------------------------------------------------------------------------------------
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

  return (
    <div className='form-de-registro'>
        <h2>Crea tu cuenta</h2>
        <Form onSubmit={onSubmit} onChange={onChange}>

        <Form.Group className='form-group'>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Nombre" name="nombre" defaultValue={formData.nombre} />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Apellidos" name="apellidos" defaultValue={formData.apellidos}/>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className='form-group'>
          <Form.Control type="email" placeholder="Correo electronico" name="email" defaultValue={formData.email}/>
        </Form.Group>

        <Form.Group className='form-group'>
          <Row>
            <Col>
              <Form.Control type="password" placeholder="Contraseña" name="password" defaultValue={formData.password}/>
            </Col>
            <Col>
              <Form.Control type="password" placeholder="Repetir contraseña" name="repeatPassword" defaultValue={formData.repeatPassword}/>
            </Col>
          </Row>
        </Form.Group>


            <Button variant="primary" type="submit"> {!signUpLoading ? "Registrase" : <Spinner animation="border" />}</Button>
        </Form>
    </div>
  )
}

function initialFormValue(){
    return{
        nombre: "",
        apellidos:"",
        email:"",
        password:"",
        repeatPassword:"",
    }
}

export default FormDeRegistro