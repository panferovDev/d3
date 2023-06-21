import React, { useReducer, useEffect, useContext } from 'react';
import { PostContext, PostContextDispatch } from '../PostContexts';
import postReducer from '../reducers/postReducer';
import { apiPostGetAllService } from '../../services';
import type { PostActionTypes, PostType } from '../../Types';

type PostContextProviderProp = {
  children: React.ReactElement;
};
export default function PostContextProvider({ children }: PostContextProviderProp): JSX.Element {
  const [posts, postDispatch] = useReducer(postReducer, []);


  return (
    <PostContext.Provider value={posts}>
      <PostContextDispatch.Provider value={postDispatch}>{children}</PostContextDispatch.Provider>
    </PostContext.Provider>
  );
}

export const usePostContext = (): PostType[] => {
  const posts = useContext(PostContext);
  if (!posts) {
    throw new Error('no data in context');
  }
  return posts;
};

export const usePostDispatch = (
  fn: (...args: unknown[]) => (dispatch: React.Dispatch<PostActionTypes>) => void,
): ((...args: unknown[]) => void) => {
  const dispatch = useContext(PostContextDispatch);
  if (!dispatch) {
    throw new Error('no data in context');
  }

  return (...args: unknown[]) => fn(...args)(dispatch);
};
