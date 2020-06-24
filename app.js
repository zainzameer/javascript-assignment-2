//Chapter 21-25
//Task 1:
//var firstName= prompt("Enter your first name");
// var lastName= prompt("Enter your last name");
// var firstChar= firstName.slice(0)
// var otherChar= lastName.slice(0)
// firstChar=firstChar.toUpperCase();
// otherChar=otherChar.toUpperCase();
// var fullName= firstChar+" "+otherChar;
// alert("Welcome "+fullName)

//Task 2:
// var input= prompt("Enter your favourite mobile model");
// var firstChar= input.slice(0,1);
// var secondChar=input.slice(1); 
// var mobilePhone=firstChar+secondChar;
// document.write("My Favourite Phone is: "+mobilePhone+"<br>");
// var a=mobilePhone.length;
// document.write("Length of String is: "+a)

//Task 3:
// var word="Pakistani"
// var a=word.indexOf("n");
// document.write("String: "+word+"<br>")
// document.write("Index of 'n' is: "+a)

//Task 4:
// var word= "Hello World";
// var a=word.lastIndexOf("l");
//  document.write("String: "+word+"<br>")
//  document.write("Last Index of 'l' is: "+a)

//Task 5:
// var word="Pakistani";
// var a= word.charAt(3)
//   document.write("String: "+word+"<br>")
//   document.write("Character at index 3 is: "+a)

//Task 6:

//Task 7:
// var word="Hyderabad";
// var firstChar=word.slice(0,5)
// var newWord= word.replace(firstChar,"Islam")
// document.write("City: "+word+"<br>")
// document.write("After Replacement: "+newWord)

//Task 8:
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var newMessage=message.replace(/and/g,"&")
// document.write(newMessage)

//Task 9:
// var string="472";
// var number =parseInt (string);
// document.write("Value: "+string+"<br>")
// document.write("Type: String"+"<br>")
// document.write("Value: "+number+"<br>")
// document.write("Type: Number")

//Task 10:
// var input=prompt("Please enter");
// var firstChar=input.slice(0)
// firstChar=firstChar.toUpperCase();
// document.write("User input: "+input+"<br>")
// document.write("Upper case: "+firstChar)

//Task 11:
// var input=prompt("Please enter");
// var firstChar=input.slice(0,1)
// var otherChar=input.slice(1)
// firstChar=firstChar.toUpperCase();
// otherChar=otherChar.toLowerCase();
//  document.write("User input: "+input+"<br>")
// document.write("Title case: "+firstChar+otherChar)

//Task 12:
// var num = 35.36;
// var n = num.toString();
// var a= n.replace(num,"3536")
// document.write("Number: "+num+"<br>")
// document.write("Result: "+a)

//Task 13:

//Task 14:
// var A=["cake","apple pie","cookie","chips","patties"];
// var input= prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am");
// input=input.toLowerCase();
// var message = "";
// for(i=0;i<A.length;i++){

// if(input==A[i]){

// message = input+" is avalaible at index "+i+" in our bakery";
// break;
// }

// else{

// message = "We are sorry. "+input+" is not avalaible in our bakery";

// }
// }
// alert(message);

//Task 15:

//Task 17:
// var input="Pakistan";
// a= input.str.charAt(7)
// document.write(a)

//Chapter 26-30
//Task 1:
// var number= +prompt("Please enter a positive integer");
// var a= Math.round(number);
// document.write("number: "+number+"<br>")
// document.write("round off value: "+a+"<br>")
// var a=Math.ceil(number);
// document.write("ceil value: "+a+"<br>")
// var a=Math.floor(number)
// document.write("floor value: "+a);

//Task 2:
// var number= +prompt("Please enter a negative floating point number");
// var a= Math.round(number);
// document.write("number: "+number+"<br>")
// document.write("round off value: "+a+"<br>")
// var a=Math.ceil(number);
// document.write("ceil value: "+a+"<br>")
// var a=Math.floor(number)
// document.write("floor value: "+a);

//Task 3:
// var number=+prompt("Please enter a number to find absolute value");
// var a= Math.abs(number);
// document.write("The absolute value of a "+number+" is "+a)

//Task 4:
// var number= Math.random();
// var num1= (number*6) + 1;
// var diceNumber=Math.floor(num1);
// document.write("Random dice value: "+diceNumber)

//Task 5:
// var number=Math.random();
// var num1=(number*2)+1;
// var toss=Math.floor(num1);
// if(toss==2){
//     document.write("Random coin value: Heads ")
// }
// else if(toss==1){
//     document.write("Random coin value: Tails ")
// }

//Task 6:
// var number= Math.random();
// var num1=(number*100)+1;
// var result=Math.floor(num1);
// document.write("Random number between 1 and 100 is: "+result)

//Task 7:

//Task 8:
// var number= Math.random();
// var num1=(number*10)+1;
// var result=Math.floor(num1);
// var a = +prompt("Please enter a number from 1 to 10")
// if(result==a){
//     alert("Congratualtions you guess the correct number ")
// }
// if(result!=a){
//     alert("please try again")
// }

//Chapter 31-34:
//Task 1:
// var a= new Date();
// document.write(a);

//Task 2:
// var monthNames = ["Jan", "Feb", "Mar", "April", "May", "June", "July","Aug","Sept","Oct","Nov","Dec"];
// var now = new Date();
//  var theMonth = now.getMonth();
//  var nameOfmonth = monthNames[theMonth];
// document.write(nameOfmonth)

//Task 3:
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  var a= nameOfToday.slice(0,3);
//  alert("Today is "+a)

//Task 4:
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// if (nameOfToday=="Sunday" || nameOfToday=="Saturday"){
//     alert("It's Fun day")
// }

//Task 5:
// var a= new Date();
// var b= a.getDate();
// if(b<16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

//Task 6:
// var today = new Date();
// document.write("Current Date: "+today+"<br>")
// var todaymili= today.getTime();
// document.write("Elapsed milisecond since January 1,1970: "+todaymili+"<br>")
// var c= todaymili/(1000*60*60)
// document.write("Elapsed minutes since January 1,1970: "+c)

//Task 7:
// var a=new Date();
// var b= a.getHours();
// if(b<=12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

//Task 8:
// var a=new Date("31 December,2020");
// a.setDate(31);
// document.write(a)

//Task 9:
// var a=new Date("25 April,2020")
// var b= new Date("18 June,2015")
// var msa= a.getTime();
// var msb= b.getTime();
// var msDiff=msa-msb;
// var diff=msDiff/(1000*60*60*24)
// document.write(diff+" days have passed since 1st Ramadan,2015")

//Task 10:
// var a= new Date("05 December,2015")
// var b= new Date("01 January,2015")
// msa= a.getTime();
// msb= b.getTime();
// var msDiff= msa-msb;
// var diff=msDiff/(1000);
// document.write("On reference date "+a+", "+diff+" seconds had passed since begining of 2015")

//Task 11:
// var a= new Date();
// var hour= a.getHours();
// var d=new Date();
// d.setHours(hour-1)
// document.write("Current date: "+a+"<br>"+"1 hour ago, it was "+d)

//Task 12:
// var a= new Date();
// var year= a.getFullYear();
// var d=new Date();
// d.setFullYear(year-100)
// alert("Current date: "+a+"\n"+"100 years back, it was "+d)

//Task 13:

//Task 14:

//Chapter 35-38:
//Task 1:
// function date() {
//      var a= new Date();
//      document.write(a)
// }
// date();

//Task 2:
// function name(){
//     var firstName= prompt("Enter your first name")
//     var secondName= prompt ("Enter your last name");
//     alert("Welcome "+firstName+secondName)
// }
// name();

//Task 3:
// var z= +prompt("Enter the first number")
// var x= +prompt("Enter the second number")
// function add(){
    
//     var f= z+x;
//     return f;
// }
// var g= add(z,x)
// alert(g)

//Task 4:
// function calculator(num1,opr,num2){
//     if (opr=="+"){
//         var z= num1+num2;
//         return z;
//     }
// if (opr== "-"){
//     var x= num1- num2;
//     return x;
// }
// }
// var result= calculator(5,"+",8)
// var result1= calculator(7,"-",5)
// alert(result+"\n"+result1)

//Task 5:
// function square(a){
//     var b= a*a;
//     return b;
// }
// var c= square(8)
// alert(c)

//Task 6:
// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// alert(factorial(5));

//Task 7:
// var a= +prompt("Enter the starting number of counting")
// var b= +prompt("Enter tne ending number of counting")
// function count(){
//     for(var i=a;i<=b;i++){
//         document.write(i+"<br>")
//     }
// }
// count();

//Task 8:

//Task 9:
//i
// var width=10;
// var height=10;
// function area(){
//     var f=width*height;
//     return f;
// }
// var g= area(width,height)
// alert(g)
//ii
// function area(width,height){
//     var f=width*height;
//     return f;
// }
// var g= area(10,9)
// alert(g)

//Task 10:

//Task 11:
// var input = "the quick brown fox"
// var words = input.split(" ");

// for (i = 0; i < words.length; ++i) {
//     words[i] = String.fromCharCode(words[i].charCodeAt(0) - 32) + words[i].substring(1);
// }

// alert(words.join(" "))

//Task 12:

//Task 13:

//Task 14:
// function calcCircumference(){
//     var radius= 20;
//     var b= 2*3.142*radius;
//     document.write("The circumference is: "+b)
// }
// calcCircumference();
// function calcArea(){
//     var radius= 20;
//     var b= 3.142*radius*radius;
//     document.write("The area is: "+b)
// }
// calcArea();





