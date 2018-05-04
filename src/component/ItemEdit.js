import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'
import { deleteItem, editItem, addFavorite, borrow } from '../reducers/stuff'

class Item extends Component {
    constructor(props) {
      super(props)
      this.state = {
        edit: false,
        id: props.item.id,
        title: props.item.title,
        description: props.item.description,
        photo_url: props.item.photo_url,
        stuff_value: props.item.stuff_value
      }
    }
    toggleEdit = () => {
      this.setState({edit: !this.state.edit})
    }
   
    // I am forcing state to become true with the ! not operator. 
  
  
  
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
  
    render() {
      const { title, description, photo_url, id, stuff_value } = this.props.item
      return (
        <div>
          {
            this.state.edit ?
            <div className="itemContainer">
              <div className="formItem">Title <input value={this.state.title} onChange={this.handleTitleInput}/></div>
              {/* I could change the input to be textarea if I wanted more space for my edits. */}
              <div className="formItem">Description <input value={this.state.description} onChange={this.handleDescriptionInput}/></div>
              <div className="formItem">Photo <input value={this.state.photo_url} onChange={this.handlePhotoInput}/></div>
              <div className="formItem">Daily Value <input value={this.state.stuff_value} onChange={this.handleStuffInput}/></div>
              
              <div className="itemContainer">
                <button onClick={() => {
                  this.props.editItem(id, this.state)
                  this.toggleEdit()
                  }}>Save</button>
                <button onClick={this.toggleEdit}>Cancel</button>
                
                <button onClick={() => this.props.deleteItem(id)}>delete</button>
              </div>
  
            </div> :
            <div>
  
              
               <div className='itemContainer'>
                {/* <h3>Title{title}, {description} {photo_url} {stuff_value}</h3> */}
                <div className="flexRow">
                  <div className="formItem itemImage" style={{backgroundImage: `url(${photo_url})`}}></div>
                  <div className="flexBetween flexColumn">
                <Link to={`/Stuff/Item/${id}/`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                    <div>
                      <div className="formItem">Title: {title} </div>
                      <div className="formItem">Description: {description} </div>
                      <div className="formItem">Daily Value {stuff_value} </div>
                    </div>
                    </Link>
                    <div>
                      <button onClick={this.toggleEdit}>Edit</button>
                      <button onClick={() => this.props.addFavorite(id, this.props.user)}>Favorite</button>
                      <button onClick={this.toggleBorrow}>Borrow This</button>
                    </div>
                  </div>
                </div>
                    
                  
                </div>
  
            </div>
          }
        </div>
      )
    }
  }




function mapStateToProps(state) {
    const { user, stuff } = state;
    return { user, stuff }
  }
  
  
  export default connect(mapStateToProps, { deleteItem, editItem, addFavorite, borrow })(Item)