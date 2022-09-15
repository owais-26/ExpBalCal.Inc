function addMoney() {
  let totalbudget = parseInt(document.getElementById("totalsav").innerHTML);
  let currentbalance = parseInt(
    document.getElementById("currentbal").innerHTML
  );
  let savname = document.getElementById("savingsname").value;
  // console.log(savname)
  let money = parseInt(document.getElementById("savings").value);

  if (savname == "") {
    alert("Plese Enter Saving name");
  } else if (money == " ") {
    alert("Plese Enter a Valid Amount");
  } else {
    totalbudget = totalbudget + money;
    currentbalance = currentbalance + money;
    document.getElementById("totalsav").innerHTML = totalbudget;
    document.getElementById("currentbal").innerHTML = currentbalance;
    let para = document.createElement("p");
    para.innerHTML =
      "Saving Name : " + savname + " <br> Saving Amount: " + money;
    document.getElementById("savadd").appendChild(para);
  }
}

function addExpense() {
  let currentbalance = parseInt(
    document.getElementById("currentbal").innerHTML
  );
  let expname = document.getElementById("expensename").value;
  let expamount = parseInt(document.getElementById("expenseamount").value);
  if (expname == "") {
    alert("Plese Enter Expense name");
  } else if (expamount == " ") {
    alert("Plese Enter a Valid Amount");
  } else if (expamount <= currentbalance) {
    currentbalance -= expamount;

    document.getElementById("currentbal").innerHTML = currentbalance;
    var para = document.createElement("p");
    para.innerHTML =
      "Expense Name : " + expname + " <br> Expended Amount: " + expamount;
    document.getElementById("expadd").appendChild(para);
  } else {
    alert("Sorry Your Expense amount can't be greater than Current Balance");
  }
}
