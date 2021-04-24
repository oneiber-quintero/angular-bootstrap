import { Component, OnInit, Input} from '@angular/core';
import { PixabayService } from '../../services/pixabay.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  data: any = {};
  imageList: any = [];
  message: any;
 

  constructor(
    private pixabayService: PixabayService
  ) { }

  ngOnInit(): void {
    let filters = this.pixabayService.getFilters();
    if( filters ) {
      this.getData(filters);
      
    }else{
      this.getData({category: 'all', word: ''});
    }
    
  }

  receiveMessage($event: any) {
    this.getData($event);
  }

  getData(filters: any) {
    this.message = filters;
    this.data['key'] = environment.pixabayKey;
    
    if( this.message.category != "all" ) {
      this.data['category'] = this.message.category;
      
    }
    if( this.message.word != '' ) {
      this.data['q'] = this.message.word;
    }
    let temp =  this.data ;
    this.data = {};
    this.getImages( temp );
  }

  getImages (data: any) {
    this.pixabayService.getImages( data ).subscribe( res => {
      let images = res.hits;
      if( images && images.length > 0 ){
        this.imageList = images
      }else{
        this.imageList = [];
      }
    });
  }

}
