var searchButtonEl = document.querySelector('#search-button');
// var mainSearchButtonEl = document.querySelector('#mainsearch-button');
var cityInputEl = document.querySelector('#cityInput');
var selectFormatEl = document.querySelector('#select');

var searchResults = function (event) {
    event.preventDefault();

    var location = cityInputEl.value.trim();
    var format = selectFormatEl.value;

    if (format){
        getSearchResult(location, format);
    }

    console.log(cityInputEl.value);
    cityInputEl.value = '';
};

// var searchResultsMP = function (event) {
//     event.preventDefault();

//     var location = cityInputEl.value.trim();
//     var format = selectFormatEl.value;

//     if (format){
//         getSearchResult(location, format);
//     }

//     console.log(cityInputEl.value);
//     cityInputEl.value = '';
//     window.location.replace("search-results.html");
// };

var getSearchResult = function(location, format){
    console.log("test");
    var apiURL = 'https://www.loc.gov/' + format + '/?q=' + location + '&fo=json';
    console.log(apiURL);

    fetch(apiURL)
        .then(function(response){
            if (response.ok){
            response.json()
                .then(function (data) {
                console.log('Loc Gov', data);
                displayResults(data.results, location, format);
            });
            } else {
                alert('Error: ' + response.statusText);
            }
        });
};

var displayResults = function(data, location, format){
    console.log(data, location, format);

    for(var i = 0; i < data.length; i++){
        var dataTitle = data[i].title;
        console.log(dataTitle);

        var dataDate = data[i].date;
        console.log(dataDate);

        var dataDes = data[i].description[0];
        console.log(dataDes);

        var cardID = "#card" + i;
        var findCard = document.querySelector(cardID);
        console.log(findCard);

        findCard.children[0].children[0].textContent = dataTitle;
        findCard.children[0].children[1].textContent = dataDate;
        findCard.children[0].children[2].textContent = dataDes;

    }
};


searchButtonEl.addEventListener('click', searchResults);
// mainSearchButtonEl.addEventListener('click', searchResultsMP);