import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HistoryComponent} from "./components/history/history.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TransportDocComponent} from "./components/transportDoc/transportDoc.component";
import {HomeComponent} from "./components/home/home.component";
import {routing} from "./app.routing";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {PopupModule} from 'ng2-opd-popup';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TransportDocComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    NgxDatatableModule,
    PopupModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
