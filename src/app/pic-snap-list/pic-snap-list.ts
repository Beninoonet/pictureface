import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { PicSnap } from "../pic-snap/pic-snap";
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-pic-snap-list',
  imports: [PicSnap],
  templateUrl: './pic-snap-list.html',
  styleUrl: './pic-snap-list.scss',
})
export class PicSnapList implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {}

   


  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }
    

}
