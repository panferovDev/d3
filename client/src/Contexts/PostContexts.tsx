import React from 'react';
import type { PostActionTypes, PostType } from '../Types';

export const PostContext = React.createContext<PostType[]>([]);
export const PostContextDispatch = React.createContext<React.Dispatch<PostActionTypes> | null>(null);

