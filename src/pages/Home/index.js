import React, { useState, useEffect } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Icon, Button, Navbar } from 'react-materialize';
import Counter from './styles'
import Body from './body'
import { Link } from 'react-router-dom';
import gitHub from '../../assets/img/github.svg';
import Moon from '../../assets/img/moon.svg';
import Sun from '../../assets/img/sun.svg';

import SvgComponent from '../../components/svgCounter';
import Footer from '../../components/Footer';

function Home() {
  const [darkMod, setDarkMod] = useState(false)
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
      setNumber(number + 1);
    }
  };

  function resetNumber() {
    setNumber(0);
    setNumber1("0");
    setNumber2("0");
    setNumber3("0");
  };

  function getDark() {
    if (darkMod) {
      setDarkMod(false)
    } else {
      setDarkMod(true)
    }
  }


  return (
    <>
    <Body darkMod={darkMod} >
      {/* //Header */}
      <Navbar
        alignLinks="right"
        brand={<Link to="/" className="mine">Contador de episodios</Link>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >

        {darkMod ?
          <img onClick={() => getDark()} className="responsive-img dark" src={Sun} alt="Noite" title="Amanhecer" />
          :
          <img onClick={() => getDark()} className="responsive-img dark" src={Moon} alt="Dia" title="Anoitecer" />
        }

        <a href="https://github.com/rafalmeida73/counter" title="Git Hub">
          <img className="responsive-img" src={gitHub} alt="GitHub" />
        </a>

      </Navbar>

      {/* image */}
      <div className="counter">
        <Counter darkMod={darkMod} number1={number1} number2={number2} number3={number3}>
          <SvgComponent />
        </Counter>


        {/* //buttons */}
        <div className="row">
          <div className="buttons">
            <div className="col s12 m12 l6">
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

            <div className="col s12 m12 l6">
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
<Footer/>

      </Body>
    </>
  );
}

export default Home;