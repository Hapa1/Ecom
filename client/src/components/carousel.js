import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Head from "react-helmet";

class Slides extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        
        <div>
            
            <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://s3-us-west-1.amazonaws.com/lootbox1/public/model.png" alt="Chicago" height="50%" width="100%"/>
      <div class="carousel-caption">
      <h3>YOUR FAVORITE WARDROBE STAPLE</h3>
        <p>Meet the Air Max. That
pair you'll never want to take off.</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="https://s3-us-west-1.amazonaws.com/lootbox1/public/featured.png" alt="Chicago" height="50%" width="100%"/>
      <div class="carousel-caption">
        <h3>DREAMS ARE MADE HERE</h3>
        <p>Prime footwear and prime deals.</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
        </div>
      );
    }
  }
  
  export default Slides