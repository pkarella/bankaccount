//B.L.


var Account = function (name, newDeposit, withdrawal, currentAmount) {
  this.name = name;
  this.newDeposit = newDeposit;
  this.withdrawal = withdrawal;
  this.balance = currentAmount;
}

Account.prototype.makeDeposit = function() {
  var newBalance= this.newDeposit;
  return newBalance;


}

//U.I.
$(document).ready(function() {

  var newAccount = new Account();

  $("form#formone").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var bankAmount = parseInt($("#bankAmount").val());
    var inputtednewDeposit = parseInt($("#newDeposit").val());
    var withdrawal = $("#withdrawal").val();


    var newAccount = new Account(inputtedName, inputtednewDeposit, withdrawal, bankAmount);

    console.log(typeof bankAmount);
    $("ul#test").append("<li>" + newAccount.balance +"</li>");

  });

  $("form#formtwo").submit(function(event) {
    event.preventDefault();
    newAccount.makeDeposit();
    $("ul#test").append("<li>" + newAccount.balance +"</li>");
  });
});
