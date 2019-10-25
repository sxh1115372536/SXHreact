import store from 'store'
function set(key,value) {
  store.set(key,value)
}
function get(key,defaultValue) {
  if(defaultValue===undefined){
     throw new Error(' get() ')
  }
  return store.get(key,defaultValue)
}
function remove(key) {
  if (key) {
    store.remove(key)
  }else{
    store.clearAll()
  }
}
export default{
  set,
  get,
  remove,
  KEYS:{
    USER_KEY: 'user_key',
    TOKEN_KEY: 'token_key'
  }
}