function greet(){
       console.log("hem");
}
greet();

function add(a,b){
    return a+b;
}
console.log(add(10,30));

function greeting(name,callback){
    console.log(name+"Your Balance is ");
    callback()
}

function sbi(){
    console.log("750")
}

function canara(){
    console.log("900")
}

function yes(){
    console.log("10000")
}

greeting("pushpa",canara);



let grade = "D";
switch(grade){
    case   "A" :
    console.log("First class");
    break;

    case  "B" :
    console.log("Second class");
    break;

    case "C" :
    console.log("Third class");
    break;

    default :
       console.log("Fail");
    
}

let mark = 40;

switch(mark){
   case  50 :
   console.log("First class");
   break;

   case 40:
   console.log("second class");
   break;

   default:
    console.log("TOp class")
}

let bank = -5;

    if (bank >= 500){
        console.log("BALACE IS MAINTAINED");
    }
    else if (bank <= 500){
        console.log("Not maintained balance");
    }
    else{
        console.log("Acc is not in active");
    }

    let day = "tuesday";

    switch(day){
        case "monday" :
            console.log("Tamil class");
            break;
        case "tuesday" :
            console.log("English class");
            break;
        case "wednesday" :
          console.log("Maths class");  
        break;

        default:
            console.log("own study");
        
    }

    let signal = "green";
        switch (signal){
            case "red" :
                console.log("stop");
            break;
           
            case "yellow" :
                console.log("get ready");
            break;

            case "green" :
                console.log("let's go to learn switch");
            break;

            default:
              console.log("Drive Bike carefully Follow the traffic signals");
        }

     let point = 80;

     switch(point){
        case 50 :
            console.log("Average mark");
        break;

        case 60 :
            console.log("Need to improve");
        break;
        
        case 70 :
            console.log("good");
        break;

        case 80 :
            console.log("Excelent");
        break;
        default :
            console.log("Fail");
     } 

let a=10; b=5;
let operator ="*";

switch  (operator){
    case "+" :
        console.log(a+b);
    break;

    case "-" :
        console.log(a-b);
    break;

    case "*" :
        console.log(a*b);
    break;
    
    case "/" :
        console.log(a/b);
    break;

    default:
        console.log("Enter the correct operator")

}

function user(){
    return function(){
        console.log("your called the user function but it print the inner funtion ");
    }
}

let result = user();
result();

function person1(name){
    return function(){
        console.log("Name of the person is :"+ name);
    }
}
let output = person1("Hem");
output();

function tea(){
    return function(){
        console.log("Tea is not available")
    }
}

let refresh = tea();

refresh();


function student(stdname){
    return function subject(subname){
        console.log("Student Name:" + " " + stdname +" "+ "subject is:"+subname);
    };
  
}

let studentname =student("Hem");
studentname("Tamil");
studentname("Sixth");

let studentname1 =student("chandran");
studentname1("English");

let studentname2 =student("Hemachandiran");
studentname2("Maths"); 