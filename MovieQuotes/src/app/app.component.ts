import { Component } from '@angular/core';

interface MovieQuote {
  movie: string;
  quote: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  moviequote: MovieQuote = {
    'quote': 'You shall not pass!',
    'movie': 'Fellowship of the Ring'
  }
}
