import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { SearchComponent } from './Home/Search/search.component';
import { QuickSearchComponent } from './Home/QuickSearch/quickSearch.component';
import { MyTextCasePipe } from './Pipes/myTextCase.pipe';
import { DiscountPipe } from './Pipes/discount.pipe';
import { ListComponent } from './Listing/list.component';
import { HomeService } from './services/home.service';
import { HotelService } from './services/hotel.service';
import { HotelSearch } from './Pipes/hotel.pipe';
import { RoomFilterComponent } from './Hotel_Filter/room_filter.component';
import { DetailPageService } from './services/detail_pages.service';
import { DetailsComponent } from './Hotel_DetailPage/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    QuickSearchComponent,
    FooterComponent,
    ListComponent,
    MyTextCasePipe,
    DiscountPipe,
    HotelSearch,
    RoomFilterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      {path: 'listing/:id', component: ListComponent},
      {path: 'details_Page/:id', component: DetailsComponent},
      {path: 'home', component: HomeComponent},
      {path: '', component: HomeComponent}
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HomeService,
    HotelService,
    DetailPageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}