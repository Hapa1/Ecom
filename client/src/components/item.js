import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import '../App.css';
import Axios from 'axios';

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

class item extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            item: {},
        }
    }
    componentDidMount(){
        console.log("MOUNTED!")
        console.log(this.props);
         
        Axios.get('/api/items/'+this.props.location.state._id).then(
            res => {
                console.log(res.data)
                this.setState({ item: res.data })
            }
        )
        
       /** 
        fetch('http://localhost:5000/api/items/'+this.props.location.state._id)
        .then(handleErrors)
          .then(res => {
                return res.json()
          })
          .then(item => {
            this.setState({ item: item })
          });
        console.log(this.state)
        */
    }
    render(){
        item = this.state.item
        return(
            <div>
                ITEM!
                <div>{item.name}</div>
                <div><img src={item.imgUrl}/></div>
                
            </div>
        )
    }
}

export default item;