import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import New from './pages/New';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" exact component={New} />
            <Route path="/login" exact component={Login} />
            <Route path="/perfil" exact component={Perfil} />
        </Switch>
    );
}

export default Routes;