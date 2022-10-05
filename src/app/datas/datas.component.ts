import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.scss']
})
export class DatasComponent implements OnInit {
  products:any

  constructor() { }

  ngOnInit(): void {
    
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


}
