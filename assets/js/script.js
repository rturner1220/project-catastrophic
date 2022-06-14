//variables
var inputValue = document.querySelector("#tags");
var caption = [];
var captionEl = document.querySelector(".cat-caption");


//functions to save caption to local storage
function saveCaption(){
    var caption = inputValue.value.trim()
    if(!caption){
        return false;
    }
    addCaption(caption)
    displayCaption();
};

function addCaption(caption){
    localStorage.setItem("caption", JSON.stringify(caption));
}

// //display the caption on the page
function displayCaption(){
    caption = JSON.parse(localStorage.getItem("caption"));
    var displayTag = document.createElement("li");
    displayTag.innerHTML = caption;
    captionEl.appendChild(displayTag);
};

//function to fetch a cat fact
function getCatFact(){
    var apiUrl="https://meowfacts.herokuapp.com";
    fetch(apiUrl).then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                var fact = data.data;
                $("#fact-box p").html(fact);
            })
        }
    });
}

//function to fetch a cat image
function getCatPic(){
    var apiUrl="https://cataas.com/cat?json=true";
    fetch(apiUrl).then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                var fact = data.data;
                $("#catPic").attr("src", "https://cataas.com/" + data.url)
            })
        }
    });
}

//Event Listeners
$("#factButton").click(function(){
    getCatFact();
});

$("#pictureButton").click(function(){
   getCatPic();
});


$("#caption-button").click(function(){
    saveCaption();
 });


//fetching the cat image API "CATAAS"
// var catTags = "https://cataas.com/api/tags"
//     fetch(catTags)
//     .then(function(response){
//     response.json().then(function(data){
//         console.log(data)
//         for(i = 0; i < data.length; i++){
//             //function to add data to the autocomplete input field
//             $(function() {
//                 var availableTags = data
//                 $( "#tags" ).autocomplete({
//                     source: availableTags
//                 });
//             })
//         }
//     })
// })





