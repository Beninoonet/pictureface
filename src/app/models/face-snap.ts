export class FaceSnap {
    // optional
    location?: string;
    id: string;


    constructor(
        public title: string, 
        public description: string, 
        public imgUrl: string,
        public createdAt: Date, 
        public snaps: number,
       ) {
        this.id = crypto.randomUUID().substring(0, 8);
       }

    onAddSnap(): void {
        this.snaps++;
    }

    onRemoveSnap(): void {
        this.snaps--;
    }

    setLocation(location: string): void {
        this.location = location;
    }


    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }
}