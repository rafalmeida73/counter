import styled from "styled-components";

const Counter = styled.div`
 //1-0
 #g1a1, #g1a2, #g1a3, #g1a4, #g1a5, #g1b1, #g1b5, #g1c1, #g1c2,#g1c3, #g1c4, #g1c5  {
   fill: ${props => (props.number1 === "0" ? '#F2BC79' : '')};
  }

  //1-1
  #g1c1, #g1c2, #g1c3, #g1c4, #g1c5{
    fill: ${props => (props.number1 === "1" ? '#F2BC79' : '')};
  }

  //1-2
   #g1a1, #g1b1, #g1c1, #g1c2, #g1c3, #g1b2, #g1a3, #g1a4, #g1a5, #g1b5, #g1c5{
    fill: ${props => (props.number1 === "2" ? '#F2BC79' : '')};
  }

  //1-3
  #g1a1, #g1b1, #g1c1, #g1c2, #g1c3,  #g1b2,  #g1a3, #g1c4,  #g1c5,  #g1b5,  #g1a5{
    fill: ${props => (props.number1 === "3" ? '#F2BC79' : '')};
  }

  //1-4
  #g1a1, #g1a2, #g1c1, #g1c2, #g1c3,  #g1b2,  #g1a3, #g1c4,  #g1c5{
    fill: ${props => (props.number1 === "4" ? '#F2BC79' : '')};
  }

  //1-5
  #g1a1, #g1b1, #g1a2, #g1c1, #g1c3,  #g1b2,  #g1a3, #g1c4,  #g1c5, #g1b5, #g1a5{
    fill: ${props => (props.number1 === "5" ? '#F2BC79' : '')};
  }

  //1-6
  #g1a1, #g1b1, #g1a2, #g1c1, #g1c3,  #g1b2,  #g1a3, #g1c4,  #g1c5, #g1b5, #g1a5, #g1a4{
    fill: ${props => (props.number1 === "6" ? '#F2BC79' : '')};
  }

  //1-7
  #g1a1, #g1b1, #g1c1, #g1c3, #g1c4,  #g1c5, #g1c2{
    fill: ${props => (props.number1 === "7" ? '#F2BC79' : '')};
  }

  //1-8
  #g1a1, #g1a2, #g1a3, #g1a4, #g1a5, #g1b1, #g1b2, #g1b5, #g1c1, #g1c2,#g1c3, #g1c4, #g1c5  {
    fill: ${props => (props.number1 === "8" ? '#F2BC79' : '')};
  }

 //1-9
  #g1a1, #g1a2, #g1a3, #g1a5, #g1b1, #g1b2, #g1b5, #g1c1, #g1c2,#g1c3, #g1c4, #g1c5  {
    fill: ${props => (props.number1 === "9" ? '#F2BC79' : '')};
  }
//--------------------------------------------------

   //2-0
 #g2a1, #g2a2, #g2a3, #g2a4, #g2a5, #g2b1, #g2b5, #g2c1, #g2c2,#g2c3, #g2c4, #g2c5  {
  fill: ${props => (props.number2 === "0" ? '#F2BC79' : '')};
  }

  //2-1
  #g2c1, #g2c2, #g2c3, #g2c4, #g2c5{
    fill: ${props => (props.number2 === "1" ? '#F2BC79' : '')};
  }

  //2-2
   #g2a1, #g2b1, #g2c1, #g2c2, #g2c3, #g2b2, #g2a3, #g2a4, #g2a5, #g2b5, #g2c5{
    fill: ${props => (props.number2 === "2" ? '#F2BC79' : '')};
  }

  //2-3
  #g2a1, #g2b1, #g2c1, #g2c2, #g2c3,  #g2b2,  #g2a3, #g2c4,  #g2c5,  #g2b5,  #g2a5{
    fill: ${props => (props.number2 === "3" ? '#F2BC79' : '')};
  }

  //2-4
  #g2a1, #g2a2, #g2c1, #g2c2, #g2c3,  #g2b2,  #g2a3, #g2c4,  #g2c5{
    fill: ${props => (props.number2 === "4" ? '#F2BC79' : '')};
  }

  //2-5
  #g2a1, #g2b1, #g2a2, #g2c1, #g2c3,  #g2b2,  #g2a3, #g2c4,  #g2c5, #g2b5, #g2a5{
    fill: ${props => (props.number2 === "5" ? '#F2BC79' : '')};
  }

  //2-6
  #g2a1, #g2b1, #g2a2, #g2c1, #g2c3,  #g2b2,  #g2a3, #g2c4,  #g2c5, #g2b5, #g2a5, #g2a4{
    fill: ${props => (props.number2 === "6" ? '#F2BC79' : '')};
  }

  //2-7
  #g2a1, #g2b1, #g2c1, #g2c3, #g2c4,  #g2c5, #g2c2{
    fill: ${props => (props.number2 === "7" ? '#F2BC79' : '')};
  }

  //2-8
  #g2a1, #g2a2, #g2a3, #g2a4, #g2a5, #g2b1, #g2b2, #g2b5, #g2c1, #g2c2,#g2c3, #g2c4, #g2c5  {
    fill: ${props => (props.number2 === "8" ? '#F2BC79' : '')};
  }

 //2-9
  #g2a1, #g2a2, #g2a3, #g2a5, #g2b1, #g2b2, #g2b5, #g2c1, #g2c2,#g2c3, #g2c4, #g2c5  {
    fill: ${props => (props.number2 === "9" ? '#F2BC79' : '')};
  }
//--------------------------------------------------
 //3-0
 #g3a1, #g3a2, #g3a3, #g3a4, #g3a5, #g3b1, #g3b5, #g3c1, #g3c2,#g3c3, #g3c4, #g3c5  {
  fill: ${props => (props.number3 === "0" ? '#F2BC79' : '')};
  }

 //3-1
  #g3c1, #g3c2, #g3c3, #g3c4, #g3c5{
    fill: ${props => (props.number3 === "1" ? '#F2BC79' : '')};
  }

  //3-2
  #g3a1, #g3b1, #g3c1, #g3c2, #g3c3, #g3b2, #g3a3, #g3a4, #g3a5, #g3b5, #g3c5{
    fill: ${props => (props.number3 === "2" ? '#F2BC79' : '')};
  }

  //3-3
  #g3a1, #g3b1, #g3c1, #g3c2, #g3c3,  #g3b2,  #g3a3, #g3c4,  #g3c5,  #g3b5,  #g3a5{
    fill: ${props => (props.number3 === "3" ? '#F2BC79' : '')};
  }

  //3-4
  #g3a1, #g3a2, #g3c1, #g3c2, #g3c3,  #g3b2,  #g3a3, #g3c4,  #g3c5{
    fill: ${props => (props.number3 === "4" ? '#F2BC79' : '')};
  }

  //3-5
  #g3a1, #g3b1, #g3a2, #g3c1, #g3c3,  #g3b2,  #g3a3, #g3c4,  #g3c5, #g3b5, #g3a5{
    fill: ${props => (props.number3 === "5" ? '#F2BC79' : '')};
  }

  //3-6
  #g3a1, #g3b1, #g3a2, #g3c1, #g3c3,  #g3b2,  #g3a3, #g3c4,  #g3c5, #g3b5, #g3a5, #g3a4{
    fill: ${props => (props.number3 === "6" ? '#F2BC79' : '')};
  }

  //3-7
  #g3a1, #g3b1, #g3c1, #g3c3, #g3c4,  #g3c5, #g3c2{
    fill: ${props => (props.number3 === "7" ? '#F2BC79' : '')};
  }

  //3-8
  #g3a1, #g3a2, #g3a3, #g3a4, #g3a5, #g3b1, #g3b2, #g3b5, #g3c1, #g3c2,#g3c3, #g3c4, #g3c5  {
    fill: ${props => (props.number3 === "8" ? '#F2BC79' : '')};
  }

 //3-9
  #g3a1, #g3a2, #g3a3, #g3a5, #g3b1, #g3b2, #g3b5, #g3c1, #g3c2,#g3c3, #g3c4, #g3c5  {
    fill: ${props => (props.number3 === "9" ? '#F2BC79' : '')};
  }

  //lamps
  #c1g, #c2g, #c2b, #c3g, #c4g, #c5g, #c6g,#c7g, #p1-1g, #p1-2g, #p1-3g, #p1-4g, #p2-1g, #p2-2g, #p2-3g, #p2-4g, #p2-5g{
    fill: ${props => (props.darkMod ? '#F2BC79' : '')};
  }

  //sky
  #ceu{
    fill: ${props => (props.darkMod ? '#000' : '')};
  }

`;


export default Counter;