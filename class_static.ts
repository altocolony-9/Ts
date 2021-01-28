class Figure{
    static PI = 3.14;
    
    static circle(radius: number){
        return radius * radius * this.PI;
    }
}

console.log(Figure.PI);
console.log(Figure.circle(5));