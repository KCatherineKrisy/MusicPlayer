import React from 'react'
import { Row, Col} from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'


export default class Admin extends React.Component{
    render(){
        return (
            <div>
            <Header/>
            <Row className="container">
                <div className="content">
                    {/* <Home/> */}
                    {this.props.children}
                </div>
                {/* </Col> */}
            </Row>
            </div>
        );
    }
}