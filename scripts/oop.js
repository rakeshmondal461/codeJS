class a{
    constructor(){
        this.num =100;
    }

    show(){
        console.log(this.num)
    }

    show(val){
        console.log("show with value"+val)
    }
    
}

class b extends a{
    
}

let c = new b();
c.show();