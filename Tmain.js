namestudent = [];


function submit ()
{


for (var j = 1 ;j <= 4; j++)
{
    var student = document.getElementById ("name_of_the_student_"+j).value;
console.log(student);
}

document.getElementById ("display_name_without_commas").innerHTML=namestudent;

var remove_commas= namestudent.join(" ")
console.log(remove_commas);
document.getElementById ("display_name_without_commas").innerHTML=remove_commas;


document.getElementById ("submit_button").style.display= "none";
document.getElementById ("sort_button").style.display= "inline_block";
}