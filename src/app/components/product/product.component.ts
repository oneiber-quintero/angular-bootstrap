import { Component, OnInit, ViewChild, Input, SimpleChanges,} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Image } from '../../store/image.model';
import { AddImage } from '../../store/image.actions';
import { AppState } from '../../store/image.state';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() image: any;
  img: any;
  images: Observable<Image[]>;

  constructor(
    private _router: Router,
    private store: Store<AppState>
  ) {
      this.images = this.store.select(state => state.image);
  }

  ngOnInit(): void {
    this.img = this.image;
  }

  ngOnChanges(changes:SimpleChanges){
    this.img = this.image;
  }

  addImage(img: any) {
    let tags = img.tags.split(",");
    let newImage: Image = {
      id: img.id,
      likes: img.likes,
      views: img.views,
      url: img.webformatURL,
      widthURL: img.webformatWidth,
      LargeURL: img.largeImageURL,
      widthLargeURL: img.imageWidth,
      tags: tags
    };

    this.store.dispatch({
      type: 'ADD_IMAGE',
      payload: newImage
    });
    this._router.navigateByUrl("/image-details");
    
  }

}
