import React, { Component } from "react";
import Slider from "react-slick";
import styled, { css } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bubbles from './Bubbles';
import { Transition, Trail, config, animated } from 'react-spring/renderprops';


const Dots = styled.div.attrs(props => ({
}))`
height: 9px;
width: 9px;
background-color: #bbb;
border-radius: 50%;
display: inline-block;
background-color: ${props => props.index == props.activeSlide ? '#bdbdbd' : '#f0f0f0'};
margin: 18px 12px 0px 0px;
`

const Sb = styled.span`
display: flex;
justify-content: space-between;
`
const Hd = styled.div`
display: ${(props) => props.boolVar ? "block" : "none"};
margin-bottom: 20px;
`;
const Link = styled.a`
font-family: 'Roboto', sans-serif;
font-size: 15px;
margin-top: 0px;
margin-left: 20px;
color: #DCDCDC;
vertical-align: top;
display: inline-block;

`;


export default class SlideChangeHooks extends React.Component {

  state = {

    displayQuestions: false,
    activeSlide: 0,
  };

  //this.displayQuestion = this.displayQuestion.bind(this);
  //this.handleClick = this.handleClick.bind(this);
  handleClick(index) {
    this.slider.slickGoTo(index);
  }

  displayQuestion = () =>
    this.setState(state => ({
      displayQuestions: !this.state.displayQuestions
    }))

  render() {


    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      //afterChange: current => this.setState({ activeSlide: current })
    };

    return (
      <div>
        <div>
          <Slider ref={slider => (this.slider = slider)} {...settings}
            >
            {this.props.data.images.map((i,index) =>
            <div>
              <img src={i} style={{ width: "100%"}} />
            </div>
            )}
          </Slider>
          <Sb>
            <span style={{ marginLeft: "20px" }}>
              <Trail config={config.slow} items={this.props.data.images} keys={item => item.key}
                from={{ transform: 'scale(0)' }} to={{ transform: 'scale(1)' }}>
                {item => props => <Dots style={props}
                onClick={() => this.handleClick(this.props.data.images.indexOf(item))} 
                index={this.props.data.images.indexOf(item)} activeSlide={this.state.activeSlide} />}
              </Trail>
            </span>
            <Bubbles outline text={this.props.data.name}
              onClick={this.displayQuestion} />
          </Sb>
        </div>
        <Hd boolVar={this.state.displayQuestions} >
          <Transition config={config.wobbly} reset={this.state.displayQuestions}
            unique
            items={this.state.displayQuestions}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>
            {displayQuestions => displayQuestions && (props => <animated.div style={props}>
              <Bubbles para
                text={this.props.data.desc} />
                {this.props.data.link && this.props.data.link.map((i,index) => <Link href={i}>{this.props.data.label[index]}</Link>)}
            </animated.div>)}
          </Transition></Hd>
      </div>
    );
  }
}