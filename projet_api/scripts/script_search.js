// let id=1

// var url = `https://api.jikan.moe/v4/anime/${id}`;

// var xhr = new XMLHttpRequest();
// xhr.open("GET", url);

// xhr.setRequestHeader("Accept", "*/*");

// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4 && xhr.status == 200) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//    }
// };

// xhr.send();


var callBackGetSuccess = function(data) {
    console.log(data)
    var element = document.getElementById("title");
    element.innerHTML = "le titre de cette ainme est " + data.results.tilte;
}

function buttonClickGet(){
    var queryLoc = document.getElementById("queryLoc").value;

    var url = `https://api.jikan.moe/v3/search/anime?q=${queryLoc}&page=1`

    $.get(url, callBackGetSuccess).done(function() {
    })
    .fail(function(){
        alert("error");
    })
    .always(function(){
    });
}