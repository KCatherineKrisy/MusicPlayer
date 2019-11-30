//天气
import axios from 'axios'
import JsonP from 'jsonp'
import { Modal } from 'antd';

export default class Axios{
    static jsonp (options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                // if(response)
                // debugger;
                if(response.status === 'success'){ //判断接口是否成功
                    resolve(response);
                }else{
                    reject(response.messsage);
                }
            })
        })
    }
}