import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

    @Injectable({
        providedIn: 'root'
    })

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
          new FaceSnap(
          'Ben feur',
          'C\'est moi',
          'https://media.discordapp.net/attachments/1278736055037853736/1433209973609070676/3464ad1c33c983b87d66f14b092f11ee.jpg?ex=6904850d&is=6903338d&hm=86c30c1747e72668c27b09fb6f1d38ff82d9c70b331d52e2e6d01dd6dc34f702&=&format=webp',
          new Date(),
          5 
        ),
        new FaceSnap(
          'Chaton mignon',
          'Un petit chaton trop mignon',
          'https://media.discordapp.net/attachments/1278736055037853736/1433124677475373166/image.png?ex=6904359d&is=6902e41d&hm=daaa76706927889576717bed388b63f05fa1349105b159b86c2d10c4d5301310&=&format=webp&quality=lossless',
          new Date(),
          1
        ),
        new FaceSnap(
          'Paysage magnifique',
          'Un paysage à couper le souffle',
          'https://images-ext-1.discordapp.net/external/UuqBLF2CHBj5W_EfphWuADtGvKn6Az8GTwp4Nm8EE3k/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/340833308365553665/b723671dddf2366155b8a92d74df35e9.png?format=webp&quality=lossless',
          new Date(),
          150
        ).withLocation('DISCORDO'),
        ];

        getFaceSnaps(): FaceSnap[] {
          return [...this.faceSnaps]
        }

        snapFaceSnapById(faceSnapId: string): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.onAddSnap();
  }
  unsnapFaceSnapById(faceSnapId: string): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.onRemoveSnap();
}
}