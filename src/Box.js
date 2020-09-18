import React, { Component } from 'react';
import Bubbles from './Bubbles';
import styled, { css } from 'styled-components'
import SlideChangeHooks from './Slidechange';




const vf = styled.div`
//display: flex;
//margin-left: 20px;
// background-color: yellow;
overflow: hidden; 
`



export default class Box extends React.Component {
    constructor(props) {
        super(props);
       
    }
  

   
    
    flip = (polarity) =>{
       polarity = !polarity;
    }
  
    render() {



        return (
            <vf>

                <Bubbles text={this.props.catname}/>
               
                {this.props.workname.map((i,index) => <div>
                <SlideChangeHooks 
                   data={i}  />
                {/*<Spring reset={this.state.displayQuestions}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {props => <div style={props}><Hd boolVar={this.state.displayQuestions} >
                        <Bubbles para
                            text={i.desc} />
                    </Hd></div>}
                </Spring>*/}</div>
                )}


                
                
            </vf>

        );
    }
}
