import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-pic-snap',
  imports: [],
  templateUrl: './pic-snap.html',
  styleUrl: './pic-snap.scss',
})
export class PicSnap implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;


  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap';  }

  onSnap(): void {
    if(this.snapButtonText === 'Oh Snap') {
      this.faceSnap.onAddSnap();
      this.snapButtonText = 'Oops, unSnap';
    } else {
      this.faceSnap.onRemoveSnap();
      this.snapButtonText = 'Oh Snap';  
    }
  }
}
