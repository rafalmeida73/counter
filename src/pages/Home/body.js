import styled from "styled-components";

const Body = styled.div`

  //
  nav, #mobile-nav, footer{
    background-color: ${props => (props.darkMod ? '#333' : '#7a0202')};
    background-image: ${props => (props.darkMod ? 'none' : '')};
  }

  .counter{
    background-color: ${props => (props.darkMod ? '#121212' : '}')};
  }

  .footer-copyright{
    background-color: ${props => (props.darkMod ? '#2E2E2E' : '}')};
  }

`;


export default Body;