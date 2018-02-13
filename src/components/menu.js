import React from 'react';

const Menu = (props) => {
  return (
    <main className="menu">
      <div>
        <header>Warframe Live Updates</header>
        <h1>Click an icon to begin</h1>
      </div>

      <span onClick={props.alertView}>
        <img src={require("../icons/alerts.svg")} alt=""/>
      </span>
      <span onClick={props.baroView}>
        <img src={require("../icons/baro.svg")} alt=""/>
      </span>
      <span onClick={props.invasionView}>
        <img src={require("../icons/invasions.svg")} alt=""/>
      </span>
      <span onClick={props.fissureView}>
        <img src={require("../icons/fissure.svg")} alt=""/>
      </span>
      <span onClick={props.sortieView}>
        <img src={require("../icons/sortie.svg")} alt=""/>
      </span>
      <span onClick={props.cetusView}>
        <img src={require("../icons/cetus.svg")} alt=""/>
      </span>
      <span onClick={props.darvoView}>
        <img src={require("../icons/darvo.svg")} alt=""/>
      </span>
    </main>
  )
}

export default Menu;
