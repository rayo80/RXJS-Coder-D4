import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularMaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablepersonasComponent } from './tablepersonas/tablepersonas.component';
import { PipeOperatorsComponent } from './pipe-operators/pipe-operators.component';
import { AsynpipeComponent } from './asynpipe/asynpipe.component';


@NgModule({
  declarations: [
    AppComponent,
    TablepersonasComponent,
    PipeOperatorsComponent,
    AsynpipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
