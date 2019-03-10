import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ResultsListComponent } from './results-list/results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
