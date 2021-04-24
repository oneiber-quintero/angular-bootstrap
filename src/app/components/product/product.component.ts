import { Component, OnInit, ViewChild, Input, SimpleChanges,} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Image } from '../../store/image.model';
import { addImage } from '../../store/image.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() image: any;
  img: any;
  // like = faThumbsUp;
  image$: Observable<Image>
  
  constructor(private store: Store<{ image: Image }>) {
    this.image$ = store.select('image');
  }

  ngOnInit(): void {
    this.img = this.image;
  }

  ngOnChanges(changes:SimpleChanges){
    this.img = this.image;
  }

  addImage(img: any) {
    // TODO: Dispatch an increment action
    this.store.dispatch(addImage());
  }

}
