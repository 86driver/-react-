import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'
export const search_focus = () => ({
  type: constants.SEARCH_FOCUS
})

export const search_blur = () => ({
  type: constants.SEARCH_BLUR
})

const changList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
}

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data
        dispatch(changList(data.data))
      })
      .catch((error) => {
        console.log('error')
      })
  }
}