import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { MsAsPrettyTimePipe } from './shared/ms-as-pretty-time.pipe';
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ResultsListComponent,
    MsAsPrettyTimePipe,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
