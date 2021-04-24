import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PixabayService } from '../../services/pixabay.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  message: any = {category: "", word: ""};
  @Output() messageEvent = new EventEmitter<any>();

  inputSearch: FormControl;
  inputCategory: string ;
  select: string = "Categories";

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private pixabayService: PixabayService
  ) {
     this.inputSearch = fb.control('',[Validators.required]);
     this.inputCategory = 'all';

  }
  
  ngOnInit(): void {
    let filters = this.pixabayService.getFilters();
    if( filters ) {
      if( filters.category != "all" ) {
        this.select = filters.category;
      }
      
      this.pixabayService.removeFilters();
    }else{
      this.select = "Categories";
    }

  }

  /**
   * onSearch es una funcion que se ejecuta cuando
   * se presiona el boton de buscar
   * si es catalogo emite la respuesta a su padre
   * delo contrario guarda en local storage
   */
  onSearch() {
    console.log("buscar",this.inputSearch);
    if( this._router.url !== "/catalog") {
      this._router.navigateByUrl("/catalog");
      if( this.inputCategory != 'all' || this.inputSearch.valid ) {
        this.message = {category: this.inputCategory, word: this.inputSearch.value};
      } else {
        this.message = {category: "all", word: ""};
      }
      this.pixabayService.setFilters(this.message);
    }

    if( this.inputCategory != 'all' || this.inputSearch.valid ) {
      this.message = {category: this.inputCategory, word: this.inputSearch.value};
      this.messageEvent.emit(this.message);
    } else {
      this.message = {category: "all", word: ""};
      this.messageEvent.emit(this.message);
    }

  }

  onCategory(category: any) {
    this.inputCategory = category;
    if( category == "all" ) {
      this.select = "Categories";
    }else {
      this.select = category;
    }
  }

  eventHandler($event: any) {
    if( $event.keyCode == 13) {
      this.onSearch();
    }
  }
  

}
