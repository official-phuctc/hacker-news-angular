import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hacker-news-angular';
  block_articles: any = [];
 
  constructor(private http: Http) {
    http.get('https://hacker-news-rails.herokuapp.com/articles.json')
      .subscribe(res => {
        const all_articles = res.json().original_hash.data.articles;
        while (all_articles.length > 0) {
          this.block_articles.push(all_articles.splice(0, 4));  
        }
      });
  }
}
