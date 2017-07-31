/**
 * Created by magic_000 on 31/07/2017.
 */
import {createStore} from "redux";

var defaultState = {
    todo: {
        items:[]
    }
};
function todoApp(state, action) {
    
}

var store= createStore(todoApp, defaultState);