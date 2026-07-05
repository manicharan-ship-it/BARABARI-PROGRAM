//task 1
class Student{
    greet(){
        console.log("hello student");
    }
}
let mani = new Student;
mani.greet();

//task 2
 class studentclass{
    constructor(name){
        this.name=name;
    }
    showName(){
        console.log(this.name);
    } 
}
let rahul = new studentclass("Rahul");
let priya = new studentclass("Priya");
rahul.showName();
priya.showName();


//task 3
class student{
    constructor(studentname){
        this.studentname=studentname;
    }
    introduce(){
        console.log("my name is "+this.studentname);
    }
}
let s1 = new student("Rahul");
let s2 = new student("Priya");
s1.introduce();
s2.introduce();

//task 4
class person{
    walk(){
        console.log("waking....")
}
}
class student1 extends person{

}
let m = new person;
let j = new student1;
j.walk();
m.walk();


//task 5
class person1{
    constructor(name1){
        this.name1 =name1;
    }
}
    class student3 extends person1 {
       constructor(name1,course){
        super(name1);
        this.course=course;
       }
       display(){
        console.log("Name:"+this.name1);
        console.log("course:"+this.course);
       }
    
    }
    let s = new student3("mani","BCA");
    s.display();

    //task6
let st1 = new Student("mani");
console.log(st1.___proto___ ===Student.prototype);