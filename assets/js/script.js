//variable for placing the cat image API into the html
var pictureButton = document.getElementById("pictureButton");
var factButton = document.getElementById("factButton");

function buttonTest(){
    console.log("is this working?");
}
pictureButton.addEventListener( "click" , buttonTest ); 


//fetching the cat image API "CATAAS"
var catTags = "https://cataas.com/api/tags"
    fetch(catTags)
    .then(function(response){
    response.json().then(function(data){
        for(i = 0; i < data.length; i++){
            //function to add data to the autocomplete input field
            $(function() {
                var availableTags = data
                console.log(data);
                $( "#tags" ).autocomplete({
                    source: availableTags
                });
            })
            //need to append the chosen item to the page
        }
    })
})




