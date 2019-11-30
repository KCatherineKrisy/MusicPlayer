import React from 'react'
import {HashRouter , Router ,Switch,Route,Link} from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'
import Recommend from '../pages/recommend'
import Login from '../pages/account/login'
import Register from '../pages/account/register'
import Account from '../pages/account'
import Admin from '../admin'
import Nomatch from '../pages/nomatch'
import NewList from '../pages/rankingList/newList'
import SoarList from '../pages/rankingList/soarList'
import  HotList from "../pages/rankingList/hotList"
import SingerList from "../pages/singertList"
import Cd from "../pages/cd"
import Shop from "../pages/shop"
import Problem from "../pages/problem"
export  default class IRouter extends React.Component{

    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/admin" render={()=>
                    <Admin>
                        <Switch>
                            <Route exact={true} path="/admin" component={Home}/>
                            <Route path="/admin/recommend" component={Recommend}/>
                            <Route path="/admin/rankingList/newList" component={NewList}/>
                            <Route path="/admin/rankingList/soarList" component={SoarList}/>
                            <Route path="/admin/rankingList/hotList" component={HotList}/>
                            <Route path="/admin/singerList" component={SingerList}/>
                            <Route path="/admin/cd" component={Cd}/>
                            <Route path="/admin/shop" component={Shop}/>
                            <Route path="/admin/problem" component={Problem}/>
                            <Route path="/admin/login" component={Login}/>
                            <Route path="/admin/register" component={Register}/>
                            <Route path="/admin/account" component={Account}/>

                            <Route component={Nomatch}/>
                        </Switch>
                    </Admin>
                    }/>
                </App>
            </HashRouter>
        )
    }
}
