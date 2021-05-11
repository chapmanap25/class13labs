$(document).ready(function () {
    $("button").on("click", calculate);
});


function calculate() {

    let firstname = $("#firstName").val();

    let lastname = $("#lastName").val();

    let pointsEarned = parseFloat($("#pointsEarned").val());

    let pointsPossible = parseFloat($("#pointsPossible").val());

    let percentageGrade = pointsEarned/pointsPossible;
    let lettergrade = ''; //Assign to empty string to initialize it.

//Now assign it the grade

    if(percentageGrade <= 1 && percentageGrade >= .9){
        lettergrade = "A";
    }
    else if(percentageGrade < .9 && percentageGrade >= .8){
        lettergrade = "B";
    }
    else if(percentageGrade < .8 && percentageGrade >= .7){
        lettergrade = "C";
    }
    else if(percentageGrade < .7 && percentageGrade >= .6){
        lettergrade = "D";
    }
    else if(percentageGrade <.6){
        lettergrade = "F";
    }

//Now we create the 'studentInfo' object that we will use

    let studentInfo = {
        firstName: firstname,
        lastName: lastname,
        percentage:percentageGrade ,
        letterGrade:lettergrade
    };

    $("span#fName").text(studentInfo.firstName);
    $("span#lName").text(studentInfo.lastName);
    $("span#finalPercent").text((studentInfo.percentage * 100).toFixed(2)+"%");
    $("span#finalGrade").text(studentInfo.letterGrade);

    $(".output").show();
}