import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabledynamic',
  templateUrl: './tabledynamic.component.html',
  styleUrls: ['./tabledynamic.component.scss'],
  // providers:[ConfirmationService,MessageService]
})
export class TabledynamicComponent implements OnInit {
cols:any;
products:any
  
  constructor(private confirmationService :ConfirmationService , private messageService : MessageService) { }

  ngOnInit(): void {
    

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity'}
        ];
        this.products=[
          {
          code:'.NET',
          name:'karthi',
          category:'developer',
          quantity:'Good'
         },
          {
            code:'angular',
            name:'yc',
            category:'developer',
            quantity:'Good'
          },
          {
            code:'angular',
            name:'arun',
            category:'developer',
            quantity:'Good'
          },
          {
            code:'angular',
            name:'mohan',
            category:'developer',
            quantity:'Good'
          },
          {
            code:'.NET',
            name:'perumal',
            category:'developer',
            quantity:'Good'
          },
          {
            code:'cyber',
            name:'thamu',
            category:'developer',
            quantity:'Good'
          },
          {
            code:'cyber',
            name:'yogesh',
            category:'developer',
            quantity:'Good'
          },
    ]
    
  }

  confirm(event: any) {
    this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //confirm action
        },
        reject: () => {
            //reject action
        }
    });
}
}
    
  
  

