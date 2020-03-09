import axios from 'axios'
import {API_HOST_RELEASES as RELEASES} from 'react-native-dotenv'
import store from '../../store/Store'

function albums(){
    const state = store.getState()    
    return axios.create({
        baseURL: RELEASES,
        headers: {'Authorization' : 'Bearer ' + state.authData?.accessToken}
    })
}

export default albums