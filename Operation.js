//Variables
var numberA;
var numberB;
var operation;
var OResult = '';
var Nelements;



function init(){
    //First, we need to get the values
    //variables
    var actualValue = document.getElementById("actual-value");
    var pastValue = document.getElementById("past-value");
    
    //Numbers
    var cero = document.getElementById("cero");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    
    //Operations
    var addition = document.getElementById("addition");
    var subtraction = document.getElementById("subtraction");
    var division = document.getElementById("division");
    var multiplication = document.getElementById("multiplication");
    var equal = document.getElementById("equal");
    var Reset = document.getElementById("reset");
    var errase = document.getElementById("errase");
    

    //Period
    var point = document.getElementById("point")

    //I need to optimize this code
    one.onclick = function(e){
        checkN('1');
    }
    two.onclick = function(e){
        checkN('2');
    }
    three.onclick = function(e){
        checkN('3');
    }
    four.onclick = function(e){
        checkN('4');
    }
    five.onclick = function(e){
        checkN('5');
    }
    six.onclick = function(e){
        checkN('6');
    }
    seven.onclick = function(e){
        checkN('7');
    }
    eight.onclick = function(e){
        checkN('8');
    }
    nine.onclick = function(e){
        checkN('9');
    }
    cero.onclick = function(e){
        checkN('0');
    }
    point.onclick = function(e){
        checkN('.');
    }

    //Call function reset
    Reset.onclick = function(e){
        reset();
    }

    //Operations
    addition.onclick = function(e){
        numberA = actualValue.textContent;
        operation = '+';
        clean(); 
    }
    subtraction.onclick = function(e){
        numberA = actualValue.textContent;
        operation = '-';
        clean(); 
    }
    division.onclick = function(e){
        numberA = actualValue.textContent;
        operation = '/';
        clean(); 
    }
    multiplication.onclick = function(e){
        numberA = actualValue.textContent;
        operation = '*';
        clean(); 
    }
    equal.onclick = function(e){
        numberB = actualValue.textContent;
         solve();
    }
    errase.onclick = function(e){
        replacer();
    }


    //Functions
    function checkN(number){
        if(OResult == ''){
            actualValue.textContent = actualValue.textContent + number;
            Nelements = Nelements + 1;
        }
        else{
            clean();
            pastValue.textContent = OResult; 
            actualValue.textContent = actualValue.textContent + number;
            OResult = '';
        }
    }

    
    function replacer(){
        let chain = actualValue.textContent;
        let chainCorrected;
        chainCorrected = chain.substring(0,chain.length-1);
        actualValue.textContent = chainCorrected;
    }
    
    
    function clean(){
        actualValue.textContent = '';
    }
 

    function reset(){
        clean();
        pastValue.textContent = '';
        numberA = 0;
        numberB = 0;
        operation = '';
    }


    function solve(){
        var res = 0;
        var A = parseFloat(numberA);
        var B = parseFloat(numberB);
        if (operation == '+'){
            res = A + B;
        }else if (operation == "-"){
            res = A - B;
        }else if (operation == '*'){
            res = A * B;
        }else{
            res = A / B;
        }
        clean();
        actualValue.textContent = res;
        OResult = res;
    }
    //We need to make a code tu put the actual value in the last value section when we pinch any number DONE
    //We need to make a function to errase a value.
}