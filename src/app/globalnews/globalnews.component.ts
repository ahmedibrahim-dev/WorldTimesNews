import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-globalnews',
  templateUrl: './globalnews.component.html',
  styleUrls: ['./globalnews.component.css']
})
export class GlobalnewsComponent implements OnInit {

  globalNews = [];
  constructor( private globalNewsService : NewsService)
   { 
     this.globalNewsService.getGlobalNews().subscribe((result)=>{
        this.globalNews = result.sources;
        console.log(this.globalNews);
     })
   }

  ngOnInit() {
  }

}
