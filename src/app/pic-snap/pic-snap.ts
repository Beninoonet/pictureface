import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-pic-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
  ],
  templateUrl: './pic-snap.html',
  styleUrl: './pic-snap.scss',
})
export class PicSnap implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSapped!: boolean;

  constructor(private FaceSnapService: FaceSnapsService) {

  }
 


  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap';
    this.userHasSapped = false;
  }

  onSnap(): void {
    if (this.userHasSapped) {
      this.UnSnap();
    } else {
      this.snap();
    }
  }

  UnSnap(): void {
    this.FaceSnapService.snapFaceSnapById(this.faceSnap.id);
    this.snapButtonText = 'Oh Snap';
    this.userHasSapped = false;
  }

  snap(): void {
    this.FaceSnapService.snapFaceSnapById(this.faceSnap.id);
    this.snapButtonText = 'UnSnap';
    this.userHasSapped = true;
  }

}
