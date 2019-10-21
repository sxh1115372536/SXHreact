import { 
  DECREEMENT,
  INCREEMENT
 } from './action-types'
 export const increment = (number)=>({
   type: INCREEMENT,data: number
 })
 export const decreement = (number)=>({
   type: DECREEMENT,data: number
 })