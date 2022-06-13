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

$("#factButton").click(function(){
    getCatFact();
});

$("#pictureButton").click(function(){
   getCatPic();
});

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
        }
    })
})





