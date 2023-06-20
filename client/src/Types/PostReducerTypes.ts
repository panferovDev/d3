import type { PostType } from './postTypes';

export type PostActionTypes =
  | { type: 'GET_POSTS'; payload: PostType[] }
  | { type: 'ADD_POST'; payload: PostType }
  | { type: 'DELETE_POST'; payload: PostType['id'] };
