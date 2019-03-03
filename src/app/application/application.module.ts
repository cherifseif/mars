import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { ContainerComponent } from './common/container/container.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '../shared/material/material.module';
import { SearchPipe } from '../pipes/search.pipe';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AjoutComponent } from './pages/ajout/ajout.component';
import { UpdateComponent } from './pages/update/update.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, SidebarComponent, ContainerComponent, FooterComponent, 
    SearchPipe, DashboardComponent, AjoutComponent, UpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      }),
  ],
  exports:[LayoutComponent]
})
export class ApplicationModule { }
