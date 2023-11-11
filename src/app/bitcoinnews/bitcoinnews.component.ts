import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-bitcoinnews',
  templateUrl: './bitcoinnews.component.html',
  styleUrls: ['./bitcoinnews.component.css']
})
export class BitcoinnewsComponent implements OnInit {
  bitcoinNews = [];
  constructor(private bitcoinNewsObj : NewsService)
   {
      this.bitcoinNewsObj.getBitcoinNews().subscribe((result)=>{
      this.bitcoinNews = result.articles;
    })
  }

  ngOnInit() {
  }

}
