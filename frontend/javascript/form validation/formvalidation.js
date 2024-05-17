function submitForm() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Please enter only alphabets and spaces in the name field.");
        return false;
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }
}
function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var employment = document.getElementById("employment").value;
    var table = document.getElementById("dataTable");
    var newRow = table.insertRow(-1);
    var nameCell = newRow.insertCell(0);
    var ageCell = newRow.insertCell(1);
    var dobCell = newRow.insertCell(2);
    var emailCell = newRow.insertCell(3);
    var mobileCell = newRow.insertCell(4);
    var employmentCell = newRow.insertCell(5);
    var actionCell = newRow.insertCell(6);
    nameCell.innerHTML = name;
    ageCell.innerHTML = age;
    dobCell.innerHTML = dob;
    emailCell.innerHTML = email;
    mobileCell.innerHTML = mobile;
    employmentCell.innerHTML = employment;

 
 var updateButton = document.createElement("button");
 updateButton.textContent = "Update";
 updateButton.onclick = function () {
    var rowIndex = this.parentNode.parentNode.rowIndex;
    updateForm(rowIndex);
     
 };
 updateButton.style.backgroundColor = "#4CAF50"; 
 updateButton.style.color = "white";
 updateButton.style.padding = "10px 20px"; 
 updateButton.style.fontSize = "16px"; 

 actionCell.appendChild(updateButton);

 var deleteButton = document.createElement("button");
 deleteButton.textContent = "Delete";
 deleteButton.onclick = function () {
    var rowIndex = this.parentNode.parentNode.rowIndex;
        deleteRow(rowIndex);
 };
 deleteButton.style.backgroundColor = "#f44336"; 
 deleteButton.style.color = "white"; 
 deleteButton.style.padding = "10px 20px"; 
 deleteButton.style.fontSize = "16px"; 
 actionCell.appendChild(deleteButton);




    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("employment").value = "";
    return false;
}
function updateForm(rowIndex) {
    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var row = table.rows[rowIndex];
    
    document.getElementById("name").value = row.cells[0].textContent;
    document.getElementById("age").value = row.cells[1].textContent;
    document.getElementById("dob").value = row.cells[2].textContent;
    document.getElementById("email").value = row.cells[3].textContent;
    document.getElementById("mobile").value = row.cells[4].textContent;
    document.getElementById("employment").value = row.cells[5].textContent;
    
    table.deleteRow(rowIndex);
}

function deleteRow(rowIndex) {
    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    table.deleteRow(rowIndex);
}



