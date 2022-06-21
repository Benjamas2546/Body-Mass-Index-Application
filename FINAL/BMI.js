function calculateBMI() {
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    if (h > 3) {
        alert("Your height should be in meters," +
            " not centimeters");
    } else {
        bmi = w / (h * h);
        document.getElementById("BMI").value = bmi;
        var desc = "";
        if(bmi < 18.5){
            desc = "Underweight";
        }else if ( bmi >= 18.5 && bmi < 25 ){
            desc = "Normal";
        }else if ( bmi >= 25 && bmi < 30 ) {
            desc = "Overweight";
        }else if ( bmi >= 30 && bmi < 35 ) {
            desc = "Obese";
        }else{
            desc = "Extremely Obese";
        }

        document.getElementById("description").value = desc;
        var str = "<table border= '1'>";
        for ( w = 40; w <= 100 ; w++) {
            bmi = w/ (h*h);
            if (bmi < 18.5){
                desc = "Underweight"; 
            }else if ( bmi >= 18.5 && bmi < 25){
                desc = "Normal"
            }else if ( bmi >= 25 && bmi < 30){
                desc = "Overweight";
            }else if ( bmi >= 30 && bmi < 35){
                desc = "Obese";
            }else{
                desc = "Extremely Obese";
            }
            str += "<tr> <td> "+w +" kgs </td>" +
                       "<td> "+ bmi.toFixed(2) + " </td>"+
                       "<td> "+ desc +"</td> </tr>";
        }
        str += "</table>"
        document.getElementById("bmiTable").innerHTML = str;
    }

}

