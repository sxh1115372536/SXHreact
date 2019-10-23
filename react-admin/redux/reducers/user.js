import { SAVE_USER_TOKEN } from '../action-types';
const _user = JSON.parse(localStorage.getItem('user_key')||'{}')
const _token = localStorage.getItem('token_key')
const initUser = {
  user:_user,
  token: _token,
  hasLogin:_token && _user._id
}
export default function user(state=initUser,action) {
  switch (action.type) {
    case SAVE_USER_TOKEN:
      const{user,token}=action.date
      return{
        user:{},
        token:'',
        hasLogin:false
      }
    default:
      return state;
  }
}