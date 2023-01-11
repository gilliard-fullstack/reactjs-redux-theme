import React, { useState } from "react";
import {BsFillSunFill,  BsFillMoonFill } from 'react-icons/bs'
import './App.css';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { changingTheme } from './redux/slice';

function App() {

  // Redux
  const { name } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const [msg, setMsg] = useState("😊 Tenha um Bom Dia 😊");
  const [icon, setIcon] = useState(<BsFillSunFill/>);

  const changeTheme = () => {
    
    // Redux

    switch(name) {
      case 'light': { dispatch(changingTheme('dark')); break }
      case 'dark' : { dispatch(changingTheme('light')); break }
      default:  dispatch(changingTheme('light'))
    }
    
    console.log('Recebido: ', name);
    
    // React
    const container = document.querySelector(".container");
    const button = document.querySelector('.button');
    const circle = document.querySelector(".circle");

    if (name === 'light') 
      {
        container.style.background = "#021823";
        container.style.color = "#FFFFFF";
        button.style.justifyContent = "flex-end";
        circle.style.color = "#FFFFFF";
        setMsg('😔 Bons Sonhos 😔');
        setIcon(<BsFillMoonFill/>);
      }
    else
      {
        container.style.background = "lightblue";
        container.style.color = "#000000";
        button.style.justifyContent = "flex-start";
        circle.style.color = "yellow";
        setMsg("😊 Tenha um Bom Dia 😊");
        setIcon(<BsFillSunFill/>);
      }
  }

  return (
    <div className="container">
      <span className="msg">
        { msg }
      </span>
      <span className="button">
        <span className="circle" onClick={() => changeTheme()}>
          { icon }
        </span>
      </span>
      <h1>State: { name }</h1>
      <span className="footer">Desenvolvido por Gilliard Santos</span>
    </div>
  );
}

export default App;
