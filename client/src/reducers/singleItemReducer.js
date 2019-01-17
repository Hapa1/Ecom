const singleItemReducer = (state = null, action) => {
    switch(action.type){
        case('FETCH_ITEM'):
            return action.payload || false;
        default: 
            return state;
    }
}

export default singleItemReducer;