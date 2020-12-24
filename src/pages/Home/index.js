import React, { useState, useEffect } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Icon, Button } from 'react-materialize';
import Counter from './styles'

import SvgComponent from '../../components/svgCounter'

function Home() {
 const [number, setNumber] = useState(0);
 const [number1, setNumber1] = useState("0");
 const [number2, setNumber2] = useState("0");
 const [number3, setNumber3] = useState("0");


 var digits = ("" + number).split("");

 useEffect(() => {
  if (digits.length === 1) {
   setNumber3(digits[0]);
  }

  if (digits.length === 2) {
   setNumber2(digits[0])
   setNumber3(digits[1])
  }

  if (digits.length === 3) {
   setNumber1(digits[0])
   setNumber2(digits[1])
   setNumber3(digits[2])
  }
 });

 function addNumber() {
  if (number < 0 || number >= 999) {
   setNumber(0);
   setNumber1("0");
   setNumber2("0");
   setNumber3("0");
  } else {
   setNumber(number + 1)
  }
 };

 function resetNumber() {
  setNumber(0);
  setNumber1("0");
  setNumber2("0");
  setNumber3("0");
 };


 return (
  <div className="counter">
   <Counter number1={number1} number2={number2} number3={number3}>
    <SvgComponent />
   </Counter>

   <div className="row">
    <div className="buttons">
     <div className="col s12 m6 l6">
      <Button
       large
       node="button"
       waves="light"
       onClick={() => addNumber()}
      >
       Aumentar
    <Icon left>
        add
    </Icon>
      </Button>
     </div>
     <div className="col s12 m6 l6">
      <Button
       large
       node="button"
       waves="light"
       onClick={() => resetNumber()}
      >
       Restaurar
    <Icon left>
        autorenew
    </Icon>
      </Button>
     </div>
    </div>
   </div>

  </div>
 );
}

export default Home;