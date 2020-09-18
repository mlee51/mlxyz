import React from 'react';
import './App.css';
import Box from './Box';
import Ml from './mllogo';
import Bubbles from './Bubbles';
import data from './catalog.json';
import styled, { css } from 'styled-components'
import Hello from './hello';



const catagories = data.Catagories;
let currentTime = new Date();
const Page = styled.div`
  
  overflow: hidden;
  
  @media (orientation: landscape) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;
function App() {
  return (

    <Page><Ml /><Hello/>
      {catagories.map((n, i) =>
        (<Box
          catname={n.name}
          workname={n.works}
        />))}
      <p style={{ textAlign: "center", fontSize: "15px", color: "#f0f0f0" }}>&copy; {currentTime.getFullYear()} Michael Lee</p>
    </Page>
  );
}

export default App;
