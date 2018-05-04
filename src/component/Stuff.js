import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { getUserInfo } from '../reducers/users'
import { getStuff, createItem, getFavorites, getBorrowed } from '../reducers/stuff'
import { Link } from 'react-router-dom'

import Item from './Item'

class Stuff extends Component {

    constructor() {
    super()
    this.state = {
      addStuff: false,
      title: null,
      description: null,
      photo_url: null,
      stuff_value: null
    }
  }
  
  componentDidMount() {
    this.props.getUserInfo()
    this.props.getStuff()
    this.props.getFavorites()
    this.props.getBorrowed()
  }

  toggleAddStuff = () => {
    let newDescription = { ...this.state, addStuff: !this.state.addStuff }
    this.setState(newDescription)
  }

  handleTitleInput = (event) => {
    let title = event.target.value
    this.setState({ title })
  }

  handleDescriptionInput = (event) => {
    let description = event.target.value
    this.setState({ description })
  }

  handlePhotoInput = (event) => {
    let photo_url = event.target.value
    this.setState({ photo_url })
  }

  handleStuffInput = (event) => {
    let stuff_value = event.target.value
    this.setState({ stuff_value })
  }

  createItem = () => {
    let { title, description, photo_url, stuff_value } = this.state
    this.props.createItem({ title, description, photo_url, stuff_value })
  }

  render() {
    console.log('data',this.props.stuff.data)

    return (
      this.props.user.id ?
        <div className="wrapper">
          <div className="one">
            <div className="flexHeading">
              <h1>My Stuff</h1>
              <div onClick={this.toggleAddStuff}><button> Add an Item </button> 
              </div>
            </div>

              {this.state.addStuff &&

           <div >
              <input onChange={this.handleTitleInput} placeholder="title" />
              <input onChange={this.handleDescriptionInput} placeholder="description" />
              <input onChange={this.handlePhotoInput} placeholder="photo URL" />
              <input onChange={this.handleStuffInput} placeholder="Daily Value" />
              <button onClick={this.createItem}> Post </button>
            </div>}

            <div>
              {/* Formerly the Title: My items */}
              {this.props.stuff.data.sort((a, b) => a.id - b.id).map(item => {
                return <Item item={item} key={item.id} />
              })}
            </div>
          </div>
          
          <div className="two">
            <h1>My Favorites</h1>
              {/* Formerly the Title: My items */}
              {this.props.stuff.myFavorites.sort((a, b) => a.id - b.id).map(item => {
                console.log('item', item)
                var key = item.id + '_favorites'
                return <Item item={item} key={key} />
              })}
          </div>

          <div className="three">
            <h1>Stuff I Am Borrowing</h1>
              {this.props.stuff.getBorrowed.sort((a, b) => a.id - b.id).map(item => {
                var key = item.id + '_borrowed'
                return <Item item={item} key={key} />
              })}
          </div>
          



        </div>
      : 
        <div>
          <a href="http://localhost:3002/auth"><button>Login to participate</button></a>
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  const { user, stuff } = state;
  return { user, stuff }
}

export default connect(mapStateToProps, { getStuff, getUserInfo, getFavorites, getBorrowed, createItem })(Stuff)