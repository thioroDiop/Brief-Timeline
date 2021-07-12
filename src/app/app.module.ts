import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TimelineComponent} from './timeline/timeline.component';
import {RouterModule} from "@angular/router";
import {PlayComponent} from './play/play.component';
import {NewComponent} from './new/new.component';
import {UpdateComponent} from './update/update.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    PlayComponent,
    NewComponent,
    UpdateComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: TimelineComponent},
      {path: 'timeline', component: TimelineComponent},
      {path: 'timeline-play/:id', component: PlayComponent},
      {path: 'timeline-new', component: NewComponent},
      {path: 'timeline/:id', component: UpdateComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
