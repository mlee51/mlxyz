import React, { Component, useEffect } from 'react';
import styled, { css } from 'styled-components'
import { useSpring, animated, config, interpolate } from 'react-spring'

const Bubble = styled(animated.button)`
font-family: 'Roboto', sans-serif;
//font-size: 15px;
border-radius: 200px;
padding: 8px 15px;
border: transparent;
color: grey;
margin-right: auto;
margin-left: 20px;
background: #f0f0f0;
margin-top: 30px;
margin-bottom: 10px;
outline: none;
display: block;
overflow: hidden;
${props => props.outline &&
    css`
   /* &:hover {
        color: black;
        }*/
   // display: inline-flex;
    margin-top: 6px;
  margin-right: 20px;
  margin-left: auto;
  background: white;
  border:1px solid #f0f0f0;
  
`};
`
const BubbleP = styled(animated.div)`
font-family: 'Roboto', sans-serif;
  //  text-align: right;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 14px;
  //margin-bottom: 10px;
  padding: 0px 15px 16px 0px;
  border-radius: 10px; 
  color: grey;
`


function Bubbles(props) {
  const lstart = useSpring({transform: "translateX(0%)", from: {transform: "translateX(-100%)"}});
  const rstart = useSpring({transform: "translateX(0%)", from: {transform: "translateX(100%)"}});
  
   /*   useEffect(() => {
        console.log(props.text);
      },[]);*/
   
    return (
        props.para ? <BubbleP>{props.text}</BubbleP> :
        props.outline ? 
        <Bubble style={rstart} onClick={props.onClick} outline >
            {props.text}
        </Bubble> : 
        
        <Bubble style={lstart}>
            {props.text}
        </Bubble> )

}
export default Bubbles;