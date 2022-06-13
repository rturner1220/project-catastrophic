
/*function getCoord(search) {
    var apiUrl = `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;
    fetch(apiUrl)
    .then(function (response){
        return response.json();

    }) 

    .then(function (data){
        if(!data){
            alert("location")
        }
        console.log(data);
    });

