class rect{
    constructor(l,b){
        this.length=l;
        this.width=b
    }
    area(){
        return this.length*this.width
    }
}
    const result=new rect(3,5)
    console.log(result.area());
class square extends rect{
    constructor(l){
        super(l,l)
        this.square=l*l

        }
    }
const res=new square(3)
console.log(res.square)