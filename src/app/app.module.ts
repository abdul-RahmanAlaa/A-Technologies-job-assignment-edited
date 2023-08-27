import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainBodyComponent } from './components/main-body/main-body.component';

import { MainBodyHeaderComponent } from './components/main-body-header/main-body-header.component';
import { MainBodyMainComponent } from './components/main-body-main/main-body-main.component';
import { MainBodyAsideComponent } from './components/main-body-aside/main-body-aside.component';

import { MainBodyMainHeaderComponent } from './components/main-body-main-header/main-body-main-header.component';
import { MainBodyMainSearchComponent } from './components/main-body-main-search/main-body-main-search.component';
import { MainBodyMainTableComponent } from './components/main-body-main-table/main-body-main-table.component';
import { MainBodyMainFooterComponent } from './components/main-body-main-footer/main-body-main-footer.component';

import { MainBodyAsideHeaderComponent } from './components/main-body-aside-header/main-body-aside-header.component';
import { MainBodyAsideBodyComponent } from './components/main-body-aside-body/main-body-aside-body.component';

import { MainBodyMainHeaderProfileComponent } from './components/main-body-main-header-profile/main-body-main-header-profile.component';
import { MainBodyMainHeaderChartsComponent } from './components/main-body-main-header-charts/main-body-main-header-charts.component';
import { MainBodyMainHeaderCardsComponent } from './components/main-body-main-header-cards/main-body-main-header-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainBodyComponent,

    MainBodyHeaderComponent,
    MainBodyMainComponent,
    MainBodyAsideComponent,

    MainBodyMainHeaderComponent,
    MainBodyMainSearchComponent,
    MainBodyMainTableComponent,
    MainBodyMainFooterComponent,

    MainBodyAsideHeaderComponent,
    MainBodyAsideBodyComponent,

    MainBodyMainHeaderCardsComponent,
    MainBodyMainHeaderProfileComponent,
    MainBodyMainHeaderChartsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    BrowserAnimationsModule,

    DragDropModule,
    MatProgressSpinnerModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
