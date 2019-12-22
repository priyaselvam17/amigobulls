var app = angular.module('myApp', []);    
app.controller('addctrl', function($scope,$location) {
    $scope.taskArray=[];
    $scope.add= function() {           
        if ($scope.title != undefined && $scope.description != undefined&&$scope.priority != undefined) {
            console.log("$scope.title",$scope.title)

            var ta = [];
            ta.title = $scope.title;
            ta.description = $scope.description;
            ta.priority=$scope.priority
            $scope.taskArray.push(ta);
            console.log("ta",ta)
            // CLEAR TEXTBOX.
            $scope.title = null;
            $scope.description = null;
            $scope.priority = null;
        }           
  };
  //cancel button
  $scope.cancel = function(){
      $scope.title="";
      $scope.description="";
      $scope.priority="";
  }
  // REMOVE SELECTED ROW(s) FROM TABLE.
  $scope.removeRow = function () {
        var arrTask = [];
        angular.forEach($scope.taskArray, function (value) {
            if (!value.Remove) {
                arrTask.push(value);
            }
        });
        $scope.taskArray = arrTask;
    };

});
//download
function download_csv(csv, filename) {
var csvFile;
var downloadLink;

// CSV FILE
csvFile = new Blob([csv], {type: "text/csv"});

// Download link
downloadLink = document.createElement("a");

// File name
downloadLink.download = filename;

// We have to create a link to the file
downloadLink.href = window.URL.createObjectURL(csvFile);

// Make sure that the link is not displayed
downloadLink.style.display = "none";

// Add the link to your DOM
document.body.appendChild(downloadLink);

// Lanzamos
downloadLink.click();
}

function export_table_to_csv(html, filename) {
var csv = [];
var rows = document.querySelectorAll("table tr");

for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("td, th");
    
    for (var j = 0; j < cols.length; j++) 
        row.push(cols[j].innerText);
    
    csv.push(row.join(","));		
}

// Download CSV
download_csv(csv.join("\n"), filename);
}

document.querySelector("button.download").addEventListener("click", function () {
var html = document.querySelector("table").outerHTML;
export_table_to_csv(html, "table.csv");
});