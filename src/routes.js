import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Auth from '../src/component/Auth'
import Home from '../src/component/Home'
import About from '../src/component/About'
import Works from '../src/component/Works'
import Exchange from '../src/component/Exchange'
import Favorites from '../src/component/Favorites'
import Search from '../src/component/Search'
import Stuff from '../src/component/Stuff'
import Users from '../src/component/Users'
import ItemDetail from '../src/component/ItemDetail'



export default (
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Works} path='/Works' />
        <Route component={About} path='/About' />
        <Route component={Exchange} path='/Exchange' />
        <Route component={Favorites} path='/Favorites' />
        <Route component={Search} path='/Search' />
        <Route component={Stuff} exact path='/Stuff' />
        <Route component={ItemDetail} path='/Stuff/Item/:id' />
        <Route component={Users} path='/Users' />
        <Route component={Auth} path='/Login' />
      </Switch>
    );