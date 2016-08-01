 function myFunction() {
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = 0;
        cell2.innerHTML = document.getElementById("inputitemname").value;
        cell3.innerHTML = document.getElementById("inputcity").value;
        cell4.innerHTML = document.getElementById("inputFoundLoactione").value;
        cell5.innerHTML = document.getElementById("inputFounderemail").value;
    }