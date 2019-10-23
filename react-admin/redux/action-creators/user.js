import { reqLogin } from "../../api";
import { message } from 'antd'
import {  } from '../action-types';
import { dispatch } from "rxjs/internal/observable/pairs";
const saveUserToken = (user,token) =>({type: SAE_USER_TOKEN,data:{user,token}})
export const removeUserToken = () =>{
  localStorage.removeItem('user_key')
  localStorage.removeItem('token_key')
  return{type:REMOVE_USER_TOKEN}
}
export function loginAsync(username,password) {
  return async dispatch =>{
    const result = await reqLogin({username,password})
    if (result.status===0) {
      const{user,token}=result.data
      localStorage.setItem('user_key',JSON.stringify(user))
      localStorage.setItem('token_key',token)
      dispatch(saveUserToken(user,token))
    }else{
      message.error(result.msg)
    }
  }
}