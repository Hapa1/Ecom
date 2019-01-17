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
  console.log('fetch profile');
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
  console.log("Action!")
  const res = await axios.post('/api/profile', values);
  dispatch({ type: "FETCH_USER", payload: res.data});
};

export const test = () => {
  console.log('hello!');
};