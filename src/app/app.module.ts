import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostComponent } from './components/post/post.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { DetailsComponent } from './components/details/details.component';

// import { ImageReducer } from './store/image.reducer';


import { imageReducer } from './store/image.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CatalogComponent,
    CarouselComponent,
    SearchComponent,
    ProductsComponent,
    ProductComponent,
    ContactComponent,
    PostComponent,
    ProductDetailsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({images: imageReducer}),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

