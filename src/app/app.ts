import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SlideBar } from './slide-bar/slide-bar';
import { Main } from './main/main';
import { Footer } from './footer/footer';

@Component({
  imports: [HeaderComponent,SlideBar,Main,Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('music-player');
}
