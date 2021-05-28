import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbButtonModule, NbStatusService } from '@nebular/theme';
import { NbThemeModule } from '@nebular/theme';
import { Router, RouterModule, ROUTES } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name: 'cosmic'})
  ],
  providers: [NbStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
