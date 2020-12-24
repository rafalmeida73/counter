import React, { useState } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Icon, Button } from 'react-materialize';
import Counter from './styles'

import SvgComponent from '../../components/svgCounter'

function Home() {
 const [number, setNumber] = useState(0);


 var digits = ("" + number).split("");
 console.log(digits);

 return (
  <div className="counter">
   <Counter number={number}>
    <SvgComponent />
   </Counter>

   <Button
    large
    node="button"
    style={{
     marginRight: '5px'
    }}
    waves="light"
    onClick={() => setNumber(number + 1)}
   >
    Button
    <Icon left>
     cloud
    </Icon>
   </Button>

   <Button
    large
    node="button"
    style={{
     marginRight: '5px'
    }}
    waves="light"
    onClick={() => setNumber(0)}
   >
    Button
    <Icon left>
     cloud
    </Icon>
   </Button>

   <h1>
    {number}
   </h1>

  </div>
 );
}

export default Home;