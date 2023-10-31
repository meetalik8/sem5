class Parent {
    constructor(mother) {
        this.parent = mother;
    }
    details(){
        console.log(`Hello i am parent name is ${this.parent}`);
    }
}
class Child extends Parent{
    constructor(mother,child){
        super(mother);
        this.kid = child;
    }
    show(){
        console.log(`Hello i am child name is ${this.kid}`);
    }
}

let firstchild = new Child("Bear","Cub");
firstchild.show();
firstchild.details();
