import React, { useEffect, useState, useCallback } from 'react';
import type { PostSubmitEventType, PostType } from '../../Types';
import { apiDeletePostService, apiPostGetAllService, apiPostSubmitService } from '../../services';

type UsePostType = {
  submitHandler: (e: PostSubmitEventType) => void;
  posts: PostType[];
  deleteHandler: (id: PostType['id']) => void;
};

export default function usePosts(): UsePostType {
  const submitHandler = useCallback((e: PostSubmitEventType): void => {}, []);

  const deleteHandler = useCallback((id: PostType['id']): void => {}, []);

  return { submitHandler, deleteHandler };
}
