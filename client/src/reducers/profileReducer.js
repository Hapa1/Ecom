
const profileReducer = (state = null, action) => {
    switch(action.type){
      case ('FETCH_PROFILE'):
        return action.payload || false;
      default:
        return state;
    } 
    
  }
  
  export default profileReducer