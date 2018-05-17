import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { getUserInfo } from '../reducers/users'
import { getStuff, createItem, getFavorites, getBorrowed } from '../reducers/stuff'
import { Link } from 'react-router-dom'

import Item from './Item'

class ItemDetail extends Component {
    render() {
        const id = parseInt(this.props.match.params.id);
        const itemSelected = this.props.stuff.data.find((item) => item.id == id )

        if (itemSelected) {
            return (
                <div className="PageTitle">
                    Item Detail
                    <Item item={itemSelected} key={id} />    
                  </div>
            )
        }
        else {
            return (
                <div>
                    Go back 
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    const { stuff } = state;
    return { stuff }
  }
  
  export default connect(mapStateToProps, { getStuff })(ItemDetail)