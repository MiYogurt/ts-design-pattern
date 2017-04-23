interface Image {
    display();
}

class RealImage implements Image {
    fileName: string;

    constructor(fileName: string){
        this.fileName = fileName;
        this.loadFromDisk(fileName);
    }

    display() {
        console.log("Displaying " + this.fileName);
    }

    loadFromDisk(fileName: string){
        console.log("Loading " + fileName);
    }
}

class ProxyImage implements Image{

    realImage : RealImage;
    fileName : string;

   constructor(fileName: string){
      this.fileName = fileName;
   }

    display() {
      if(this.realImage == null){
         this.realImage = new RealImage(this.fileName);
      }
      this.realImage.display();
   }
}


let img = new ProxyImage('A.png');
img.display();