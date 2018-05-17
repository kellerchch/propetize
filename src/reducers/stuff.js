import axios from 'axios'

const initialState = {
  data: [],
  myFavorites: [],
  borrow_item: [],
  getBorrowed: []
}

const GET_STUFF = 'GET_STUFF'
const GET_FAVORITES = 'GET_FAVORITES'
const GET_BORROWED = 'GET_BORROWED'
const CREATE_ITEM = 'CREATE_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const EDIT_ITEM = 'EDIT_ITEM'
const SEARCH = 'SEARCH'
const FAVORITE_ITEM = 'FAVORITE_ITEM'
const BORROW_ITEM = 'BORROW_ITEM'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STUFF + '_FULFILLED':
      return { ...state, data: action.payload.data }
    case GET_FAVORITES + '_FULFILLED':
      return { ...state, myFavorites: action.payload.data }
    case GET_BORROWED + '_FULFILLED':
      return { ...state, getBorrowed: action.payload.data }


    case CREATE_ITEM + '_FULFILLED':
      return { ...state, data: action.payload.data }
    case DELETE_ITEM + '_FULFILLED':
      return { ...state, data: action.payload.data }
    case EDIT_ITEM + '_FULFILLED':
      return { ...state, data: action.payload.data }
    case SEARCH + '_FULFILLED':
      return { ...state, data: action.payload.data }
    case FAVORITE_ITEM + '_FULFILLED':
      return { ...state }
    case BORROW_ITEM + '_FULFILLED':
      return { ...state }
    default:
      return state;
  }
}

export function getStuff() {
  return {
    type: GET_STUFF,
    payload: axios.get('/api/stuff')
  }
}

export function getFavorites() {
  console.log('getting here')
  return {
    type: GET_FAVORITES,
    payload: axios.get('/api/favorites')
  }
}

export function getBorrowed() {
  return {
    type: GET_BORROWED,
    payload: axios.get('/api/borrowed')
  }
}

export function createItem(newItem) {
  return {
    type: CREATE_ITEM,
    payload: axios.post('/api/stuff', newItem)
  }
}

export function search(keyword) {
  return {
    type: SEARCH,
    payload: axios.get(`/api/search?keyword=${keyword}`)
  }
}

export function deleteItem(id, user) {
  let body = {user_id: user.id, stuff_id: id }
console.log('id to delete', body)
  return {
    type: DELETE_ITEM,
    payload: axios.delete(`/api/stuff/`, {data: body})
  }
}

export function editItem(id, stuff) {
  return {
    type: EDIT_ITEM,
    payload: axios.put(`/api/stuff/${id}`, stuff)
  }
}

export function addFavorite(id, user) {
  let body = {user_id: user.id, item_id: id }
  return {
    type: FAVORITE_ITEM,
    payload: axios.post(`/api/favorite`, body)

  }
}

export function borrow(id, user, values, stuff, callback) {
  let body = {
    user_id_taker: user, 
    date_start: values.date_start,
    date_end: values.date_end,
    borrow_request: values.borrow_request, 
    stuff_id: stuff.id, 
    user_id_giver: stuff.user_id }

  console.log('borrow-reducer', body)
  return {
    type: BORROW_ITEM,
    payload: axios.post(`/api/borrow`, body)
    .then(() => callback())

  }
}

