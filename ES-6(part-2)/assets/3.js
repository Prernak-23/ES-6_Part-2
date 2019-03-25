class Person{
  minAge=1;
  constructor(name){
    this.name=name;
  }
   static MaxAge(){
    return 125;
  }
}
class Employee extends Person{
  constructor(name,salary){
    super(name);
    this.salary=salary;
  }
}
class Developer extends Employee{
  constructor(name,salary,competency){
    super(name,salary);
    this.competency=competency;
  }
}
 
let dev=new Developer('john',2000,'MEAN');

console.log(dev);

console.log(Person.MaxAge());

console.log(dev.minAge);
