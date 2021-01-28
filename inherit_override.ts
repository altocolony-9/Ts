
class BasePerson{
    protected name: string;
    protected age :number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
    show() :string{
        return `${this.age}は${this.name}歳です。`;
    }
}
class OverridePerson extends BasePerson{
    protected clazz :string;
    constructor(name:string,age:number,clazz:string){
        super(name,age);
        this.clazz = clazz;
    }
    show():string{
        return super.show() + `${this.clazz}です。`;
    }
}

let newPerson = new OverridePerson("nakano",25,"strong");
console.log(newPerson.show());
