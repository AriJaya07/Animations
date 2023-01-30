import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave/hero-list-enter-leave.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { HeroListAutoComponent } from './hero-list-auto/hero-list-auto.component';
import { AboutComponent } from './about/about.component';
import { HeroListAutoPageComponent } from './hero-list-auto-page/hero-list-auto-page.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page/hero-list-enter-leave-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { HeroListGroupsComponent } from './hero-list-groups/hero-list-groups.component';
import { HomeComponent } from './home/home.component';
import { OpenClosePageComponent } from './open-close-page/open-close-page.component';
import { OpenClose4Component } from './open-close4/open-close4.component';
import { QueryingComponent } from './querying/querying.component';
import { StatusSliderPageComponent } from './status-slider-page/status-slider-page.component';
import { ToggleAnimationsPageComponent } from './toggle-animations-page/toggle-animations-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    HeroListEnterLeaveComponent,
    InsertRemoveComponent,
    HeroListPageComponent,
    StatusSliderComponent,
    HeroListAutoComponent,
    AboutComponent,
    HeroListAutoPageComponent,
    HeroListEnterLeavePageComponent,
    HeroListGroupPageComponent,
    HeroListGroupsComponent,
    HomeComponent,
    OpenClosePageComponent,
    OpenClose4Component,
    QueryingComponent,
    StatusSliderPageComponent,
    ToggleAnimationsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
