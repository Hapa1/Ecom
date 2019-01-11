import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import './App.css';
import * as actions from '../actions';

class Table extends React.Component {
    
    render() {
    const row1 = [];
    const row2 = [];
    const row3 = [];
    
    //var result = chunkArray(this.props.items, 3);
    //console.log(result[0]);
    //console.log(result[1]);
    //console.log(result[2]);
    //var arr1 = result[0];
    //var arr2 = result[1];
    //var arr3 = result[2];
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
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          value: 0
        };
    }

    componentDidMount() {
        //this.props.fetchItems();

        fetch('api/items')
        .then(handleErrors)
          .then(res => {
                return res.json()
          })
          .then(items => {
            this.setState({ items })
          });
        
    }

    render() {
        return(
           
        <div>
            <header className="App-header">
					<h1>Welcome to Ecom</h1>	
			</header>
            <div className="Landing">
                <Table
                    items={this.state.items}
                />
            </div>
        </div>
        );
    }
}



export default landing;

