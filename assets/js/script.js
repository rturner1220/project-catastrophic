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
        // console.log(data[1]);
        for(i = 0; i < data.length; i++){
            // console.log(data[i]);
            $(function() {
                var availableTags = [data]
                $( "#tags" ).autocomplete({
                    source: availableTags
                });
            })
        }
    })
})

//adding tags to the autocomplete field
// $( function() {
//     var availableTags = [
//       "#Christmas Cat",
//       "Curious",
//       "Asp",
//       "BASIC",
//       "C",
//       "C++",
//       "Clojure",
//       "COBOL",
//       "ColdFusion",
//       "Erlang",
//       "Fortran",
//       "Groovy",
//       "Haskell",
//       "Java",
//       "JavaScript",
//       "Lisp",
//       "Perl",
//       "PHP",
//       "Python",
//       "Ruby",
//       "Scala",
//       "Scheme"
//     ];
//     $( "#tags" ).autocomplete({
//       source: availableTags
//     });
//   } );



