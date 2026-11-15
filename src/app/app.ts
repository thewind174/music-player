import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  imports: [HeaderComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('music-player');
}
