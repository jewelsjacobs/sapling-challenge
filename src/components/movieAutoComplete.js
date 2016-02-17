// bacon.js autocomplete sample

var inputs = $('#search')
    .asEventStream('keyup change')
    .map(function(event) { return event.target.value; })
    .filter(function(value) { return value.length > 2; })
    .throttle(500)
    .skipDuplicates();

var suggestions = inputs.flatMapLatest(function(value) {
    var url = 'http://api.7digital.com/1.2/artist/browse';
    return Bacon.fromPromise(
        $.getJSON(url, {
            letter: value,
            country: 'UK',
            oauth_consumer_key: '7drjpjvng4ph'
        }));
}).filter(function(data) {
    return data.artists.artist.length > 0;
});

suggestions.onValue(function(resp) {
    var data = { query: '', results: resp.artists.artist };
    var $results = $('#results').empty();
    data.results.forEach(function(s) {
        $('<li>').text(s.name).appendTo($results);
    });
});

var query = suggestions.map(function(data) {
    return data[0];
}).toProperty();

query.onValue(function() {
    $("h1").show();
});

query.assign($('#query'), 'text');

var markup = "<input id=\"search\" type=\"text\" />" +
"<h1 style=\"display: none\">Results for search: <span id=\"query\">--</span></h1>" +
"<ul id=\"results\"></div>"