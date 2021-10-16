import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc-articles',
  templateUrl: './bloc-articles.component.html',
  styleUrls: ['./bloc-articles.component.css']
})
export class BlocArticlesComponent implements OnInit {

  articles = [
    {id : 15 , title :"Produit A125", content:"this is a small content ", nbrlikes:20},
    {id : 20 , title :"Produit A999", content:"this is a small content ", nbrlikes:18},
    {id : 55 , title :"Produit A2545", content:"this is a small content ", nbrlikes:50},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
