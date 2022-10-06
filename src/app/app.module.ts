import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasComponent } from './datas/datas.component';
import {TableModule} from 'primeng/table';
import { TabledynamicComponent } from './tabledynamic/tabledynamic.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { ConfirmationService, MessageService } from "primeng/api";

// import {}


@NgModule({
  declarations: [
    AppComponent,
    DatasComponent,
    TabledynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ButtonModule,ToastModule,
    ConfirmPopupModule
  

    // BrowerAnimationModule


    
  ],
  providers: [ ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
