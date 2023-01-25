import React from 'react'
import BasicLayout from '../../layout/BasicLayout';
import "./Home.scss";

function Home(props) {
  const {setRefreshCheckLogin}=props;
  return (
   
      <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin}>
        <h1>Estamos en home</h1>
      </BasicLayout>
  )
}

export default Home