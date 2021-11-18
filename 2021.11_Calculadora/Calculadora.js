    /*
http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml

source is shared under the terms of LGPL 3 www.gnu.org/licenses/lgpl.html
*/

function printYearsOptions() {
    var fuel = document.getElementById("fuel");
    
    var yearSelect = document.getElementById("years");
    for (var i = yearSelect.length; i>=0; i--){
        yearSelect.remove(i-1);
    }
    
    if(fuel.value == "dieselHibrid"){
        var yearsArray = [2012, 2014, 2018];
    } else if (fuel.value == ""){
        var yearsArray = [];
    } else {
        var yearsArray = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    }
    
    for (var i = 0; i<yearsArray.length; i++){
        var opt = document.createElement('option');
        opt.value = yearsArray[i];
        opt.innerHTML = yearsArray[i];
        yearSelect.appendChild(opt);
    }
}

function coCalc(){
    
    var fuelData = 
        {
            "diesel": {
                "2011": 173,
                "2012": 171,
                "2013": 170,
                "2014": 173,
                "2015": 174,
                "2016": 170,
                "2017": 175,
                "2018": 173,
                "2019": 161
            },
        
            "dieselHibrid": {
                "2012": 152,
                "2014": 138,
                "2018": 204
            },
        
            "gasolina": {
                "2011": 205,
                "2012": 201,
                "2013": 193,
                "2014": 206,
                "2015": 194,
                "2016": 192,
                "2017": 187,
                "2018": 203,
                "2019": 181
            },
        
            "gasolinaHibrid": {
                "2011": 139,
                "2012": 169,
                "2013": 140,
                "2014": 142,
                "2015": 122,
                "2016": 131,
                "2017": 140,
                "2018": 142,
                "2019": 126
            }
        }

    var fuelValue = document.getElementById("fuel").value;
    var yearValue = parseInt(document.getElementById("years").value);
    
    var coValue = fuelData[fuelValue][yearValue];
    
    //agafem els km introduïts per l'usuari
    var kmDriven = parseFloat(document.getElementById("kmDriven").value)

   
        var coTotalValue = coValue*kmDriven;
        let result;


    //Calculem el total de grams de CO2
        if(!coTotalValue) {
             result = "<span style='font-size:18px;color:red;'>Rellene todos los campos</span>";
        } else {
             result =  coTotalValue.toLocaleString('es') + "<span style='font-size:18px'> gramos de Co<sup>2</sup></span>";
        }

        document.getElementById("coCalculated").innerHTML = result;
         

    //Printem el resultat

}


//find the percentage of a white man's earnings based on the dropdown selection of a woman's ethnicity
function getPercentage() {
  var ethnicityPercentage = 0;
  var theForm = document.forms["pollution"];
  var selectedCar = theForm.elements["cartype"];

  //set ethnicityPercentage equal to value user chose
  ethnicityPercentage = combustible[selectedCar.value];

  //return the percentage numeral to calculate in the final result
  return ethnicityPercentage;
}





/* I wanted to figure out how to include "a" or "an" gramatically before the select element, dependent on which option is selected, but that seems to be, like, crazy difficult for my skill level.

http://jsfiddle.net/adamzr/3yhFS/ 

something with that?

function properArticle() {
  var indefiniteArticle = "an";
  document.getElementById('indefinite-article')
  .innerHTML = indefiniteArticle;
}
properArticle ();
*/
