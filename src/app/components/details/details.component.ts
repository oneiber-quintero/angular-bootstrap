import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Image } from './../../store/image.model';
import { AppState } from './../../store/image.state';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  images: Observable<Image[]>;
  image: any;
  constructor(
    
    private store: Store<AppState>
  ) {
      this.images = this.store.select(state => state.image);
  }
  

  ngOnInit(): void {
    this.images.subscribe(res => {
      if(res.length > 0) {
        this.image = res[res.length - 1 ];
      }
      
    });
    
  }

}
