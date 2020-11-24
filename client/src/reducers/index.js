import { combineReducers } from 'redux';

import posts from './postsReducers';

export const reducers = combineReducers({ posts });