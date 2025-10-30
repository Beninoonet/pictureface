import { Component, OnInit } from '@angular/core';
import { PicSnap } from './pic-snap/pic-snap';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
   PicSnap
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  mySnap!: FaceSnap;
  myotherSnap!: FaceSnap;
  mylastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Ben feur',
      'C\'est moi',
      'https://media.discordapp.net/attachments/1278736055037853736/1433209973609070676/3464ad1c33c983b87d66f14b092f11ee.jpg?ex=6904850d&is=6903338d&hm=86c30c1747e72668c27b09fb6f1d38ff82d9c70b331d52e2e6d01dd6dc34f702&=&format=webp',
      new Date(),
      5 
    );
    this.myotherSnap = new FaceSnap(
      'Chaton mignon',
      'Un petit chaton trop mignon',
      'https://media.discordapp.net/attachments/1278736055037853736/1433212314862634068/8bc3f3c1e2f6f5f2f5e2e3b6f1e4c8d4.jpg?ex=6904a0bd&is=69035ebd&hm=5f4c3e1e2b6f7c8d9e0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3&=&format=webp',
      new Date(),
      10
    );
    this.mylastSnap = new FaceSnap(
      'Paysage magnifique',
      'Un paysage à couper le souffle',
      'https://media.discordapp.net/attachments/1278736055037853736/1433214501234567890/9f8e7d6c5b4a3b2c1d0e9f8e7d6c5b4a.jpg?ex=6904b1ce&is=69036fce&hm=4e3d2c1b0a9f8e7d6c5b4a3b2c1d0e9f8e7d6c5b4a3b2c1d0e9f8e7d6c5b4a3b&=&format=webp',
      new Date(),
      15
    ); 
  }
}
