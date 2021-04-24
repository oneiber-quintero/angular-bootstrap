import { Component, OnInit, ViewChild, Input, SimpleChanges,} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() imageList: any;
  list: any;
  

  constructor() { }

  ngOnInit(): void {
    this.list = this.imageList;
  }

  ngOnChanges(changes:SimpleChanges){
    this.list = this.imageList;
  }

  

}
