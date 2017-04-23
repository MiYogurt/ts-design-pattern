
namespace Iterator{
    interface Iterator{
        hasNext(): boolean;
        next(): any;
    }

    interface Container{
        getIterator(): Iterator;
    }

    class NameIterator implements Iterator{
        
        index: number = 0;
        names = ["Robert" , "John" ,"Julie" , "Lora"];
        hasNext() {
            if(this.index < this.names.length){
            return true;
            }
            return false;
        }

      next() {
         if(this.hasNext()){
            return this.names[this.index++];
         }
         return null;
      }	
    }

    class NameRepository implements Container{
        getIterator(): Iterator{
            return new NameIterator();
        }
    }

    let namesRepository = new NameRepository();
    
    for(let iter = namesRepository.getIterator();iter.hasNext();){
         let name = iter.next();
         console.log("Name : " + name);
    } 

}


