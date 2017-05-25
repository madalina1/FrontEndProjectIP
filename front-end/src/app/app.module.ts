import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HistoryComponent } from './components/history/history.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransportDocComponent } from './components/transportDoc/transportDoc.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  AccordionModule,
  DialogModule,
  InputTextModule,
  DropdownModule,
  CheckboxModule,
  InputMaskModule,
  SelectButtonModule
} from 'primeng/primeng'; //accordion and accordion tab
//accordion and accordion tab
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/index';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/index';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TransportDocComponent,
    HistoryComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    NgxDatatableModule,
    AccordionModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    InputMaskModule,
    SelectButtonModule,
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
