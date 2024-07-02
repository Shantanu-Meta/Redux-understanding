import { createStore, combineReducers } from 'redux';

const COUNTER = {
    value: 0,
}

const COUNTER2 = {
    value: 10,
}

const counterReducer = (state = COUNTER, action)=>{ // it helps to manipulate [counter] state
    console.log(state, action)
    if(action.type === "INCREMENT"){
        return {...state, value: state.value + 1}
    }else if(action.type === "DECREMENT"){    
        return {...state, value:state.value - 1}; 
    }else{
        return state;
    }
}

const counterReducer2 = (state = COUNTER2, action)=>{   // it helps to manipulate [counter 2] state
    console.log(state, action)
    if(action.type === "INCREMENT"){
        return {...state, value: state.value + 2}
    }else if(action.type === "DECREMENT"){    
        return {...state, value:state.value - 2}; 
    }else{
        return state;
    }
}

const combineReducer = combineReducers({ // as we have multiple reducers we need to wrap it in a rootReducer to create store
    counter: counterReducer,
    counter2: counterReducer2
});
//* IF this store gets a action as {type: "INCREMENT"} from dispatch(), it will circulate to all reducers and the reducers having such action will update states.


const store = createStore(combineReducer);  // create store using reducer
export default store; // export as we need to wrap it via Provider in inex.js to make this store available to whole <App/> 