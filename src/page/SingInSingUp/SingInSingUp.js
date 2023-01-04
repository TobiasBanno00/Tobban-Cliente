import React from 'react'
import "./SingInSingUp.scss"
import {Container, Row, Col, Button} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faSearch,
    faUsers,
    faComment
  } from "@fortawesome/free-solid-svg-icons";
import LogoWhiteTobban from "../../assets/png/logo-white.png"
import LogoTobban from "../../assets/png/logo.png"



function SingInSingUp() {
  return (
    <Container className='singin-singup' fluid>           {/* fluid ocupa toda la pagina */} 
        <Row>
            <LeftComponent/>
            <RightComponent/>
        </Row>
    </Container>
  )
}

function LeftComponent() {
    return(
        <Col className="singin-singup__left" xs={6}>
      <img src={LogoTobban} alt="Twittor" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Entérate de qué está hablando la gente.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          Únete a la conversación.
        </h2>
      </div>
    </Col>
    )
}

function RightComponent() {
    

    return(
    <Col className='singin-singup__right' xs={6}>
      <div>
        <img src={LogoWhiteTobban} alt="Tobban" />
        <h2>Mira lo que está pasando en el mundo en este momento</h2>
        <h3>Únete a Tobban hoy mismo.</h3>
        <Button variant="primary" >
          Regístrate
        </Button>
        <Button variant="outline-primary" >
          Iniciar sesión
        </Button>
      </div>
    </Col>
    )
}

export default SingInSingUp