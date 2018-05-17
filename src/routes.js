import React from 'react';
import { Route, Switch } from 'react-router-dom'

import About from '../src/component/About'
import Auth from '../src/component/Auth'
import BorrowRequest from '../src/component/BorrowRequest'
import Home from '../src/component/Home'
import Works from '../src/component/Works'
import Exchange from '../src/component/Exchange'
import Favorites from '../src/component/Favorites'
import Search from '../src/component/Search'
import Stuff from '../src/component/Stuff'
import Users from '../src/component/Users'
import ItemDetail from '../src/component/ItemDetail'
import UserProfile from '../src/component/UserProfile'


export default (
      <Switch>
        <Route component={ItemDetail} path='/Stuff/Item/:id' />
        <Route component={About} path='/About' />
        <Route component={Exchange} path='/Exchange' />
        <Route component={BorrowRequest} path='/BorrowRequest/Item/:id' />
        <Route component={Favorites} path='/Favorites' />
        <Route component={Auth} path='/Signin' />
        <Route component={Search} path='/Search' />
        <Route component={Stuff} exact path='/Stuff' />
        <Route component={Users} path='/Users' />
        <Route component={Works} path='/Works' />
        <Route component={UserProfile} path='/UserProfile' />

        <Route component={Home} path='/' exact />
      </Switch>
    );