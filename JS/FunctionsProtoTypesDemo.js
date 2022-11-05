//Function Constructor
function EMPLOYEE(name, designation,yearOfBirth)
{
    this.name=name;
    this.designation=designation;
    this.yearOfBirth=yearOfBirth;
}

EMPLOYEE.prototype.calculateAge=function()
{
    console.log('The current age is: '+(2022-this.yearOfBirth));
}
console.log(EMPLOYEE.prototype)

//Creating Objects
let Emp1=new EMPLOYEE('Alex','Junior Tester',1995);
console.log('Emp1: '+Emp1);
Emp1.calculateAge();

let Emp2=new EMPLOYEE('Dexter','Senior Software Developer',1990);
console.log('Emp2: '+Emp2);
Emp2.calculateAge();

let Emp3=new EMPLOYEE('Annie','Junior Analyst',1998);
console.log('Emp3: '+Emp3);
Emp3.calculateAge();
