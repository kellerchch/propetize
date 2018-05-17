import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'
import ReactModal from 'react-modal'
import { deleteItem, editItem, getFavorites, addFavorite, borrow } from '../reducers/stuff'
import ReactBootstrap, { Popover, Tooltip, Button, OverlayTrigger, Modal } from 'react-bootstrap'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      borrow: false,
      id: props.item.id,
      title: props.item.title,
      description: props.item.description,      
      photo_url: props.item.photo_url,
      stuff_value: props.item.stuff_value,
      show: false
    }
  }
  toggleEdit = () => {
    this.setState({edit: !this.state.edit})
  }
 
  // I am forcing state to become true with the ! not operator. 

  toggleBorrow = () => {
    this.setState({borrow: !this.state.borrow})
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

checkFavorites = (id) => {
  console.log('checkFavorites id', id)
  const favoritesList = this.props.stuff.myFavorites;
  console.log(favoritesList)
  const index = favoritesList.findIndex((item) => item.id === id);
  console.log(index);
  if (index === -1) {
    this.props.addFavorite(id, this.props.user)
  }
  alert('This has been added to your favorites.')
}
  
  // saveChanges = () => {
  //   this.props.editItem(this.state)
  // }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
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
            
            <div>
              <button onClick={() => {
                this.props.editItem(id, this.state)
                this.toggleEdit()
                }}>Save</button>
              <button onClick={this.toggleEdit}>Cancel</button>
              <button onClick={() => this.props.deleteItem(id, this.props.user)}>delete</button>
            </div>

          </div> :
          <div>

            
             <div className='itemContainer'>
              {/* <h3>Title{title}, {description} {photo_url} {stuff_value}</h3> */}
              
              <div className="flexRow">
                <div className="formItem itemImage" style={{backgroundImage: `url(${photo_url})`}}></div>
                <div className="flexBetween flexColumn">
                <Link to={`/Stuff/Item/${id}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  <div>
                    <div className="formItem">Title: {title} </div>
                    <div className="formItem">Description: {description} </div>
                    <div className="formItem">Daily Value: ${stuff_value} </div>
                  </div>
                  </Link>

                  <div>
                    <button className="btn btn-secondary" onClick={this.toggleEdit}>Edit</button>
                    <button className="btn btn-success"onClick={() => this.checkFavorites(id)}>Favorite</button>
                  <Link to={`/BorrowRequest/Item/${id}`} className="btn btn-primary">Exchange This
                  </Link>
                  
                          {/* <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                        Launch demo modal
                      </Button>
                          <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h4>Text in a modal</h4>
                          <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                          </p>
              
                          <h4>Popover in a modal</h4>
                          <p>
                            there is a{' '}
                            <OverlayTrigger overlay={Popover}>
                              <a href="#popover">popover</a>
                            </OverlayTrigger>{' '}
                            here
                          </p>
              
                          <h4>Tooltips in a modal</h4>
                          <p>
                            there is a{' '}
                            <OverlayTrigger overlay={Tooltip}>
                              <a href="#tooltip">tooltip</a>
                            </OverlayTrigger>{' '}
                            here
                          </p>
              
                          <hr />
              
                          <h4>Overflowing text to show scroll behavior</h4>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                      </Modal> */}
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