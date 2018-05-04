import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { getUserInfo } from '../reducers/users'
import { getStuff, search } from '../reducers/stuff'
import Item from './Item'

class Search extends Component {

    constructor() {
    super()
    this.state = {
        search: null,
        title: null,
        description: null,
        photo_url: null,
        stuff_value: null,
        keyword: null
        }
    }

    componentDidMount() {
        this.props.getUserInfo()
        this.props.search('')
    }

    handleKeywordChange = e => {
        let keyword = e.target.value
        this.setState({ keyword })
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        const styles = this.styles()
        return (
           <div className="wrapper">
            <div className="itemContainer">
                    <h1>Find Stuff to Borrow</h1>
                        {/* <div style={styles.formItem}>
                        <input onChange={this.state.title} placeholder="title" />
                        <input onChange={this.state.description} placeholder="description" />
                        <input onChange={this.state.value} placeholder="stuff value" /> */}
                        <form onSubmit={this.onFormSubmit}>
                            <input onChange={this.handleKeywordChange} placeholder="keyword" />

                            <button onClick={() => this.props.search(this.state.keyword)}> Search </button>
                        </form>

                        <h1>Results</h1>

                        {this.props.stuff.data.sort((a, b) => a.id - b.id).map(item => {
                return <Item item={item} key={item.id} />
                })}  
                </div>
            </div>
        )
    }

    styles = () => {
        return {
          formItem: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: 10,
            width: '70%'
          },
          itemContainer: {
            border: '1px solid gray',
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        }
    }

}

function mapStateToProps(state) {
    const { user, stuff } = state;
    return { user, stuff }
  }
export default connect(mapStateToProps, { getStuff, getUserInfo, search })(Search)