import {HomeState} from '../types/statesTypes/StatesTypes'
import {AlbumsActionInterface, Action, GET_ALBUMS} from '../types/actionsTypes/ActionsTypes' 

const initialState: HomeState  = {
    albums: []
}

export default function(state: HomeState = initialState, action: Action<AlbumsActionInterface>){
    switch(action.type){
        case GET_ALBUMS:            
            return {
                ...state,
                albums: action.payload
            }
        default: return state
    }
}