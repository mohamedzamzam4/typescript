interface Vehicle{
    make :string;
    model :string;
    year:number;
    start():void;
}

class Car implements Vehicle{
    make: string;
    model: string;
    year: number;
    start(): void {
        console.log(`the ${this.model} Engine started`);
    }
    
        constructor(make:string,model:string,year:number) {
            this.make=make;
            this.model=model;
            this.year=year;
            
        }
    
}
 const car1=new Car("mercedess GLA","mercedess",2020);
car1.start();