/* eslint-disable import/prefer-default-export */

import type React from 'react';
import type { PostActionTypes, PostSubmitEventType, PostType } from '../Types';
import apiService from './apiServiceConfig';

export const apiPostSubmitService = (
  e: PostSubmitEventType,
  dispatch: React.Dispatch<PostActionTypes>,
): void => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('file', e.currentTarget.file.files[0]);
  formData.append('title', e.currentTarget.title.value);

  apiService
    .post<PostType>('/api/post', formData)
    .then((res) => {
      dispatch({ type: 'ADD_POST', payload: res.data });
    })
    .catch(
      (err) => Promise.reject(new Error('Post submit error')),
      // throw new Error("Post submit error")
    );
};

export const apiPostGetAllService = (dispatch: React.Dispatch<PostActionTypes>): Promise<void> =>
  apiService<PostType[]>('/api/post')
    .then((res) => {
      dispatch({ type: 'GET_POSTS', payload: res.data });
    })
    .catch((err) => {
      throw new Error('err with posts');
    });

export const apiDeletePostService = (
  id: PostType['id'],
  dispatch: React.Dispatch<PostActionTypes>,
): void => {
  apiService
    .delete<PostType['id']>(`/api/post/${id}`)
    .then((res) => {
      dispatch({ type: 'DELETE_POST', payload: id });
    })
    .catch((err) => {
      throw new Error('err with posts delete');
    });
};
