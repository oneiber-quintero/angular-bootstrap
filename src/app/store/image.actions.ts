import { Image } from './image.model';
import { Action } from '@ngrx/store'

export const ADD_IMAGE = 'Add image'

export class AddImage implements Action {
    readonly type = ADD_IMAGE
    constructor(public payload: Image) { }
}

export type Actions = AddImage