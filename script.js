/*------literal pattern-----------*/
var bike = {
    name: "Bajaj Discover 110",
    color: "Blue",
    make: "Bajaj",
    year: 2020,
    model: '200 NS',
    getInfo: function () {
        return "Vehicle: " + this.name + ' ' + this.color + ' ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};




console.log(bike.getInfo());

document.getElementById("heads").innerHTML="Bike Details -Object Literal Pettern";
document.getElementById("demo").innerHTML= "Bike Name : " + bike.name + " </br>" + "Bike Model : "  + bike.model + "</br>" + "Bike Make : "  + bike.make+ "</br>" + "Bike Year : " + bike.year+ "</br>"  + "Bike Color : "  +bike.color;


/*--------------JavaScript Namespace--------------------*/

var Student = function (name, age,cgpa) {
    this.name = name;
    this.age = age;
    this.cgpa=cgpa;
};
Student.prototype.getName = function () {
    return this.name;

};
Student.prototype.getage = function () {
    return this.age;
};

Student.prototype.getcgpa = function () {
    return this.cgpa;
};
// object Create
var tipu = new Student("Tipu Sultan",24,3.23);
console.log(tipu.getName());
console.log(tipu.getage());
console.log(tipu.getcgpa());

   Student.prototype.sayMyName = function (){
    console.log('My name is ',this.getName());
    console.log('My age is ',this.getage());
    console.log('My cgpa is ',this.getcgpa());

 };
tipu.sayMyName();
document.getElementById("heads1").innerHTML="JavaScript Namespace";
document.getElementById('demo4').innerHTML= "Name is :" +tipu.name + "<br>" + "Age is : " + tipu.age + "<br>" + "CGPA is: "+tipu.cgpa;

/*----PotoType--------*/

function Student(name, age) {
    this.name = name;
    this.age = age;
    
}

Student.prototype.Hello = function () {
    console.log("Hello," + this.name);
}

Student.prototype.Print = function () {
    console.log("Hello1" + this.name, this.age);
}
Student.prototype.Prints = function () {
    console.log( this.age);
}

Student.prototype.email = "tipus371@gmail.com"

var p = new Student("Tipu Sultan", 24);
var p2 = new Student("Hridoy", 23);
var p3 = new Student("Kasem", 22);

document.getElementById("heads2").innerHTML="Prototype Property";
document.getElementById('demo5').innerHTML= "Name :" +p.name + "<br>" + "Age : " +p.age + "<br>" + "Mail : "+ p.email;
document.getElementById('demo8').innerHTML= "Name :" +p2.name + "<br>" + "Age : " +p2.age + "<br>" + "Mail :"+ p2.email;
document.getElementById('demo9').innerHTML= "Name :" +p3.name + "<br>" + "Age : " +p3.age + "<br>" + "Mail :"+ p3.email;
console.log(p);
console.log(p2);
console.log(p3);


/*--------Inheritance------------*/

function Person() {
    this.name = "Tipu Sultan"
    this.age  = 23;
}

function Teacher() {
    Person.call(this);
    this.subject = "C++";
    
}

var teacher = new Teacher();
var name = teacher.name;
console.log('name');
document.getElementById("heads3").innerHTML="Inheritance";
document.getElementById('demo1').innerHTML= "Name :" +teacher.name + "<br>" + "Age : " +teacher.age + "<br>" + "Subject : "+ teacher.subject;

