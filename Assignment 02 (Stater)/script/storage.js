'use strict';
//saveToStorage
function saveToStorage(key, value) {
    localStorage.setItem(key, value);
}
//getFromStorage
function getFromStorage(key) {
    return localStorage.getItem(key);
}
function getRowPet(data) {
    return '<td scope="col"> ' + data + '</td>';
}
function makeRow() {
    let strTr = "<tr>";
    strTr += getRowPet(getFromStorage('Pet_ID'));
    strTr += getRowPet(getFromStorage('Pet_Name'));
    strTr += getRowPet(getFromStorage('Age'));
    strTr += getRowPet(getFromStorage('Type'));
    strTr += getRowPet(getFromStorage('Weight'));
    strTr += getRowPet(getFromStorage('Length'));
    strTr += getRowPet(getFromStorage('Breed'));
    strTr += '<td scope="col"><div class="getcolor" style="background-color: '+ getFromStorage('Color') +';">  </div> </td>';
    strTr += getRowPet(getFromStorage('Vaccinated'));
    strTr += getRowPet(getFromStorage('Dewormed'));
    strTr += getRowPet(getFromStorage('Sterilized'));
    strTr += getRowPet(getFromStorage('Date_Added'));
    strTr += '<td scope="col"><button>Delete</button> </td>'
    strTr += "</tr>";
    return strTr;
}

function myFunction() {
    
    if (typeof (Storage) !== "undefined") {
        // Store
        let arr = {};
        arr['petID'] = document.getElementById("input-id").value ? document.getElementById("input-id").value : '';
        arr['petName'] = document.getElementById("input-name").value ? document.getElementById("input-name").value : '';
        arr['age'] = document.getElementById("input-age").value ? document.getElementById("input-age").value : '';
        arr['type'] = document.getElementById("input-type").value ? document.getElementById("input-type").value : '';
        arr['weight'] = document.getElementById("input-weight").value ? document.getElementById("input-weight").value : '';
        arr['length'] = document.getElementById("input-length").value ? document.getElementById("input-length").value : '';
        arr['breed'] = document.getElementById("input-breed").value ? document.getElementById("input-breed").value : '';
        arr['color'] = document.getElementById("input-color-1").value ? document.getElementById("input-color-1").value : '';
        arr['vaccinated'] = document.getElementById("input-vaccinated").value ? document.getElementById("input-vaccinated").value : '';
        arr['dewormed'] = document.getElementById("input-dewormed").value ? document.getElementById("input-dewormed").value : '';
        arr['sterilized'] =  document.getElementById("input-sterilized").value ? document.getElementById("input-sterilized").value : '';
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        arr['dateAdd'] = today;
        saveToStorage(arr['petID'], JSON.stringify(arr));
        
        for (var x in localStorage) {
            console.log(x);
        }
        
        let getLocalStorage = JSON.parse(localStorage);
        console.log(Object.entries(localStorage)
);
        document.getElementById("tbody").innerHTML = x;

        //  document.getElementById("Name").innerHTML = getFromStorage("Pet_Name");

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
for (var x in localStorage) {
    if(localStorage.getItem(x) != null){
        console.log(localStorage.getItem(x));
    }
}

document.getElementById("tbody").innerHTML = makeRow();
