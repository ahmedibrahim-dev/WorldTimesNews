import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-egyptnews',
  templateUrl: './egyptnews.component.html',
  styleUrls: ['./egyptnews.component.css']
})
export class EgyptnewsComponent implements OnInit {
  egNews = [];
  constructor(private egyptNews : NewsService) 
  {
     this.egyptNews.getEgyptNews().subscribe((result)=>{
       this.egNews = result.articles;
       //console.log(this.egNews);
     })
   }

  ngOnInit() {
  }

}
