import axios from 'axios'
import store from '../../store/Store'
import {API_HOST_CATEGORIES as CATEGORIES} from 'react-native-dotenv'

function categories(){
    const state = store.getState()
    return axios.create({
        timeout: 2000,
        baseURL: CATEGORIES,
        headers: {'Authorization' : 'Bearer ' + state.authData?.accessToken}
    })
}

export default categories