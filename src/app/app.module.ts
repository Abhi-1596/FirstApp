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
import { RoomFilterComponent } from './HotelFilter/room_filter.component';

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
    RoomFilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      {path: 'listing/:id', component: ListComponent},
      {path: 'home', component: HomeComponent},
      {path: '', component: HomeComponent}
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HomeService,
    HotelService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}