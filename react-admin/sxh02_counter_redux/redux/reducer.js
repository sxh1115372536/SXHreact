import { DECREEMENT,INCREEMENT } from './action-types';
export default function count(state=1,action) {
  console.log('cout',this.state,action)
  switch (action.type) {
    case INCREEMENT:
      return this.state + action.data
    case DECREEMENT:
      return state - action.data
    default:
      return state
  }
}