$(document).ready(function() {

    var firstNumber = "";
    $(".number").on("click", function(event){
        event.preventDefault();
        firstNumber += this.value;
        $("#first-number").text(firstNumber);
    })
    
    
});