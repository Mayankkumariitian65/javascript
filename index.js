let name1 = prompt("enter your name");
let age = Number(prompt("enter your age"));
let marks = Number(prompt("enter your marks"));
let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 75) {
    grade = 'B'
}else if( marks >=60){
    grade = 'c';
}else if ( marks >=45){
    grade ='D';
}else{
    grade='E';
}


alert("Name: " + name1 + "\n" + "Age: "+ age + "\n" + "Grade: "+ grade);