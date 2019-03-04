import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: "FETCH_USER", payload: res.data });
};

export const fetchItems = () => async dispatch => {
  const res = await axios.get('/api/items');
  dispatch({
    type: "FETCH_ITEMS",
    payload: res.data
  })
};

export const getUser = (_id) => async dispatch => {
  const res = await axios.get('/api/user/' + _id)
  dispatch({
    type: "FETCH_PROFILE",
    payload: res.data,
  })
}

export const getItem = (_id) => async dispatch => {
  const res = await axios.get('/api/items/' + _id)
  console.log('fetch item');
  dispatch({
    type: "FETCH_ITEM",
    payload: res.data,
  })
};

export const updateProfile = (values) => async dispatch => {
  console.log(values)
  const res = await axios.post('/api/profile/update', values);
  dispatch({ type: "FETCH_USER", payload: res.data});
};

export const createComment = (text, id) => async dispatch => {
  console.log("values",text)
  console.log("id",id)
  const res = await axios.post('/api/createcomment', {text, id});
  dispatch({ type: "FETCH_ITEMS", payload: res.data});
};

export const fetchComments = (_id) => async dispatch => {
  const res = await axios.get('/api/getcomments/'+ _id);
  dispatch({ type: "FETCH_COMMENTS", payload: res.data});
}

export const test = () => {
  console.log('hello!');
};

export const newItem = (data) => async dispatch => {
  
  const res = await axios.post('/api/createitem', {data})
  dispatch({ type: "FETCH_USER", payload: res.data});
  
}
