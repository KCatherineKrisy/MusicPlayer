import React from 'react'
import { Row, Col,Menu} from 'antd';
import {NavLink} from 'react-router-dom'
import MenuConfig from './../../resource/menuConfig'
import "./index.less"
import Util from '../../utils/utils'
import axios from '../../axios/index.js'
const SubMenu = Menu.SubMenu;
const MenuItemGrop = Menu.ItemGroup;

export default class Header extends React.Component{
    state={

    }
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu =(data) =>{
        // 相当于一个数组
        return data.map((item) => {
            if(item.children){
        //         //递归遍历是否有子节点
        //         // this.renderMenu(item.children);
                return (
            <SubMenu title={item.title} key={item.key}>
                     {this.renderMenu(item.children)}
                 </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
            <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render(){
        return (
            <div className="header">
                <div className="header_title">
                    <div className="header_logo">
                    </div>
                    <Menu
                        mode="horizontal"
                        theme="dark">
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
                <span className="header_login">
                    <NavLink to='/admin/login'>登陆</NavLink>
                    <NavLink to='/admin/register' style={{marginLeft:'10px'}}>注册</NavLink></span>
            </div>
        );
    }
}