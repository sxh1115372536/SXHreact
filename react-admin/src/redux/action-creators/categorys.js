import { 
  RECEIVE_CATEGORYS,
  ADD_CATEGORY,
  UPDATE_CATEGORY
 } from '../action-types';
 import { 
   reqCategorys,
   reqAddCategory,
   reqUpdateCategory
  } from '../../api';
//   import Category from '../../containers/category'
// import categorys from '../reducers/categorys';
// import { dispatch } from 'rxjs/internal/observable/pairs';
  const receiveCategorys = (categorys)=>({type:RECEIVE_CATEGORYS,data:categorys})
  const addCategory =(category)=>({type:ADD_CATEGORY,data:category})
  const updateCategory = (category) =>({type:UPDATE_CATEGORY,data:category})
  export const getCategorysAsync=()=>{
    return async (dispatch,getState) =>{
      // const resilt = await reqCategorys()
      // if (result.status===0) {
      //   const categorys = result.data
      //   dispatch(receiveCategorys(categorys))
      // }
      if(getState().categorys.length>0) return
      const result = await reqCategorys()
      if(result.status===0){
        const categorys =result.data
        dispatch(receiveCategorys(categorys))
      }
      return result.msg
    }
  }
  export const addCategoryAsync =(categoryName)=>{
    return async dispatch =>{
      const result = await reqAddCategory(categoryName)
      if(result.status===0){
        const category = result.data
        dispatch(addCategory(category))
      }
      return result.msg
  }
}
export const updateCategoryAsync = ({categoryId,categoryName})=>{
  return async dispatch =>{
    const result = await reqUpdateCategory({categoryId,categoryName})
    if(result.status===0){
      const category = {_id:categoryId,name:categoryName}
      dispatch(updateCategory(category))
  }
  return result.mag
}
}