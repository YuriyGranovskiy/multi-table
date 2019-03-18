import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { MsAsPrettyTimePipe } from './shared/ms-as-pretty-time.pipe';
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ResultsListComponent,
    MsAsPrettyTimePipe,
    StartComponent,
    TestComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
