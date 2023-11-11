import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(public httpClient : HttpClient) { }

  getGlobalNews(): Observable<any>{
    return this.httpClient.get("https://newsapi.org/v2/sources?apiKey=e64aeaf702894982a0ad6c5e7f76d029");
    
  }

  getEgyptNews(): Observable<any>{
    return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&apiKey=e64aeaf702894982a0ad6c5e7f76d029");
  }

  getUsNews(): Observable<any>{
    return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=e64aeaf702894982a0ad6c5e7f76d029");
  }

  getBitcoinNews(): Observable<any>{
    return this.httpClient.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=e64aeaf702894982a0ad6c5e7f76d029");
  }

  /*
  getNews(path): Observable<any>{
    return this.httpClient.get(path);
  }
  */
}
