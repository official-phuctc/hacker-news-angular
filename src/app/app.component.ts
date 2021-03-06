import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hacker News';
  block_articles: any = [];
 
  constructor(private http: HttpClient) {
    http.get<any>(environment.graphql_url)
      .subscribe(res => {
        const all_articles = res.original_hash.data.articles;
        while (all_articles.length > 0) {
          this.block_articles.push(all_articles.splice(0, 4));  
        }
      });
  }
}
