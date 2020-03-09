import axios from 'axios'
import {API_HOST_USER as USER} from 'react-native-dotenv'
import store from '../../store/Store'

function user(){
    const state = store.getState()    
    return axios.create({
        baseURL: USER,
        headers: {'Authorization' : 'Bearer ' + state.authData.accessToken}
    })
}

export default user