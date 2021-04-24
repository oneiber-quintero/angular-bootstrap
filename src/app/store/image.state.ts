// import { State, Action, StateContext, Selector } from '@ngxs/store';
// import { Image } from './image.model';
// import { AddImage } from './image.actions';

// @State({
//   name: 'image',
//   defaults: {
//     image: []
//   }
// })
// export class ImageState {
//   @Selector()
//   static getImage(state: ImageModel) { return state; }

//   // Add image
//   @Action(AddImage)
//   add({ getState, patchState }: StateContext<ImageModel>, { payload }: AddImage) {
//     const state = getState();
//     patchState({
//       posts: [...state, payload]
//     });
//   }
// }

import { Image } from './image.model';

export interface AppState {
  readonly images: Image[];
}