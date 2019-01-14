import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import './App.css';
import * as actions from '../actions';
import { connect } from 'react-redux';


class Table extends React.Component {
    
    render() {
    const row1 = [];
    const row2 = [];
    const row3 = [];

    var num = 0;
    this.props.items.forEach((item) => {
        if(num % 3 == 0){
            row1.push(<Item item={item} key={item._id}/>);
        }
        else if(num % 3 == 1) {
            row2.push(<Item item={item} key={item._id}/>);
        }
        else if(num % 3 == 2){
            row3.push(<Item item={item} key={item._id}/>);
        }
        num++;
    });
      return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        {row1}
                    </Col>
                    <Col xs={6} md={4}>
                        {row2}
                    </Col>
                    <Col xs={6} md={4}>
                        {row3}
                    </Col>
                </Row>
            </Grid>
        </div>
      );
    }
  }

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

class Item extends React.Component {
    render() {
        const item = this.props.item;
    
        return (
        <div>
            <img src={item.imgUrl}></img>
            <p><Link to={{ pathname: '/items/'+item._id, state: { _id: item._id} }}>{item.name}</Link></p>
            <p>${item.price}</p>
        </div>
        );
      }
}

class landing extends React.Component {
    
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        return(    
        <div>
<div>
  <h2>Carousel Example</h2>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    </ol>

    <div class="carousel-inner">
    <div class="item active">
        <img className="Banner" src="https://images.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/HP-MH-C80-DT-W-1920X800_tcm221-320204.jpg" alt="Los Angeles"/>
        <div class="carousel-caption">
          <h3>Los Angeles</h3>
          <p>LA is always so much fun!</p>
        </div>
    </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
            

            <div className="Landing">
                <Table
                    items={this.props.items}
                />
            </div>

            <header className="App-header2">
					<h2>Start out the new year with Cloud Outlets</h2>	
			</header> 


        </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        items: state.itemReducer,
    }
    
}

export default connect(mapStateToProps, actions)(landing);

