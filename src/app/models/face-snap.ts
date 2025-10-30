export class FaceSnap {

    
    constructor(
        public title: string, 
        public description: string, 
        public imgUrl: string,
        public createdAt: Date, 
        public snaps: number,
       ) {}

    onAddSnap(): void {
        this.snaps++;
    }

    onRemoveSnap(): void {
        this.snaps--;
    }
}