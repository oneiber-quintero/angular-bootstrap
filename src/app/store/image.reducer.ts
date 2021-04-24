import { Image} from './image.model';
// import * as ImageActions from './image.actions'

// const initialState: Image = {
//     id: 0,
//     likes: 0,
//     views: 0,
//     url: '',
//     state: 'Pending'
// }

// export function ImageReducer(state: Image[] = [initialState], action: ImageActions.Actions) {
//   switch (action.type) {
//     case ImageActions.ADD_IMAGE:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

import { createReducer, on } from '@ngrx/store';
import { addImage } from './image.actions';
 

const initialState: Image = {
    id: 0,
    likes: 0,
    views: 0,
    url: '',
    state: 'Pending'
}

// export const initialState = 0;
 
const _imageReducer = createReducer(
  initialState,
  on(addImage, (state) => state),
);
 
export function imageReducer(state: any, action: any) {
  return _imageReducer(state, action);
}