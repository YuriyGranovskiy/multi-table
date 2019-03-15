import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { MsAsPrettyTimePipe } from './ms-as-pretty-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ResultsListComponent,
    MsAsPrettyTimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
