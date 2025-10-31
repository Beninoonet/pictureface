import { Component,} from '@angular/core';
import { PicSnapList } from './pic-snap-list/pic-snap-list';
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  imports: [
   Header,
   PicSnapList
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
