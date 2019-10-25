/* 
reduer函数: 根据原有的state和指定的action, 产生并返回一个新的state
*/
import { combineReducers } from "redux"
import user from './user'
import headerTitle from './header-title'



/* 
向外暴露整合多个reducer产生总reducer函数
总状态: 对象
  {
    count: 1,
    products: []
  }
*/
export default combineReducers({
 user,
 headerTitle
})