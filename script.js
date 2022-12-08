var searchButtonEl = document.querySelector('#search-button');
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

var getSearchResult = function(location, format){
    console.log("test");
    var apiURL = 'https://www.loc.gov/' + format + '/?fa=location:' + location;
    console.log(apiURL);
    var placeholder = 'https://jsonplaceholder.typicode.com/posts';

    fetch(placeholder)
        .then(function(response){
            if (response.ok){
            response.json()
                .then(function (data) {
                console.log('Loc Gov', data);
                displayResults(data);
            });
            } else {
                alert('Error: ' + response.statusText);
            }
        });
};

var displayResults = function(data){
    console.log("hello");
};


searchButtonEl.addEventListener('click', searchResults);