/* eslint-disable @typescript-eslint/default-param-last */
import type { PostActionTypes, PostType } from '../../Types';

// const initState: PostType[] = [];

const postReducer = (initState: PostType[] = [], action: PostActionTypes): PostType[] => {
  switch (action.type) {
    case 'ADD_POST':
      return [...initState, action.payload];
    case 'GET_POSTS':
      return action.payload;
    case 'DELETE_POST':
      return initState.filter((el) => el.id !== action.payload);
    default:
      return initState;
  }
};

export default postReducer
