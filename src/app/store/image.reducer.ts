import { Image} from './image.model';
import { Action } from '@ngrx/store';

export const ADD_IMAGE = 'ADD_IMAGE';

export function addImageReducer(state: Image[] = [], action: any) {
  switch (action.type) {
    case ADD_IMAGE:
        return [...state, action.payload];
    default:
        return state;
    }
}