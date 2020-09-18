import React, { Component } from "react";
import Bubbles from './Bubbles';
import styled, { css } from 'styled-components';
import { Spring, Transition, animated } from 'react-spring/renderprops';


const Hd = styled.div`
display: ${(props) => props.boolVar ? "block" : "none"};
margin-bottom: 20px;
`
const Res = styled(animated.img)`
width: 100%;
marginLeft: auto;
marginRight: auto;
`

const Right = styled.button`
border: transparent;
background: #f0f0f0;
margin-bottom: 0px;
outline: none;
display: block;
overflow: hidden;
margin-top: 0px;
margin-right: 20px;
margin-left: auto;
background: white;
`

const Link = styled.a`
font-family: 'Roboto', sans-serif;
font-size: 15px;
margin: 0px 10px 0px 0px;
color: #DCDCDC;
vertical-align: top;
display: inline-block;
outline: none;
`;

const Txt = styled(animated.div)`
font-family: 'Roboto', sans-serif;
text-align: right;
margin: 0px 20px 0px 0px;
  font-size: 14px;
  padding: 8px 15px;
  color: grey;
`

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayhello: true, displayresume: false, displaybio: false };
    }
    displayhello = () =>
        this.setState(state => ({
            displayhello: !this.state.displayhello
        }))

    displayresume = () =>
        this.setState(state => ({
            displayresume: !this.state.displayresume
        }))
    displaybio = () =>
        this.setState(state => ({
            displaybio: !this.state.displaybio
        }))

    render() {
        return (
            <div>
                <Bubbles outline text={'hello'} onClick={this.displayhello} />
                <Hd boolVar={this.state.displayhello}>
                    <Bubbles outline text={'bio'} onClick={this.displaybio} />
                    <Transition
                        items={this.state.displaybio}
                        from={{ opacity: 0 }}
                        enter={{ opacity: 1 }}
                        leave={{ opacity: 0 }}>
                        {displaybio => displaybio && (props => <animated.div style={props}><Txt> {"🖥️🎨🎶❤️"} 22, nyc</Txt><Right style={{marginTop: "0px", marginBottom: "20px"}}>
                            <Link  href={"https://www.instagram.com/michaellee.xyz/"}>IG</Link></Right></animated.div>)}
                    </Transition>
                    <Bubbles outline text={'resume'} onClick={this.displayresume} />
                    <Transition
                        items={this.state.displayresume}
                        from={{ opacity: 0 }}
                        enter={{ opacity: 1 }}
                        leave={{ opacity: 0 }}>
                    {displayresume => displayresume && (props => <animated.span style={props}><Res src={"./hello/michaelleeresume.svg"} />
                        <Right><Link href={"./hello/michaelleeresume.pdf"}>pdf</Link></Right></animated.span>)}
                        </Transition>

                    
                </Hd>
            </div>
        );
    }
}