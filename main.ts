class Person {
    private _name!: string;
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }
  }
  
  const p = new Person();
  p.name = "kei";
  console.log(p.name);
  