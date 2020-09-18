import React, { Component } from 'react';
import styled, { css } from 'styled-components'


const Me = styled.title`
font-family: 'Varela Round', sans-serif;
font-size: 39px;
border-radius: 200px;
line-height: 44px;
border: transparent;
color: #5B5B5B;
margin-right: auto;
margin-left: 20px;
letter-spacing: 0.0425em;
margin-top: 30px;
margin-bottom: 10px;
outline: none;
display: block;
`

export default class Ml extends React.Component {
    render() {
      return <Me>michael<br/>lee.xyz</Me>;
    }
  }

