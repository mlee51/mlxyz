import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //centerPadding: "100px",
    appendDots: dots => (
        <div
            style={{
                
               // backgroundColor: "#ddd",
                marginLeft: "0",
              // padding: "0px"
            }}
        >
            <ul style={{ marginLeft: "auto"}}> {dots} </ul>
        </div>
    ),
    
    customPaging: i => (
        <div
            style={{
                width: "50%",
                
                marginLeft: "0px",
                overflow: "visible",
                color: "blue",
                border: "1px blue solid",
                overflowX: "hidden", 
            }}
        >
            {i + 1}
        </div>
    )
    
};

function Myslider(props) {


    return (
     
            
            <Slider {...settings} style={{backgroundColor: "grey",  overflow: "hidden"    }}>
                
                    {props.elem}
                
                <div>
                1
                </div>
                <div>
                2
                </div>
                
            </Slider>
     
    );
}
export default Myslider;