var apiKey = '01dec6e86570af6671e124127ac30e10';
var apiSecret = '219030a81f170746';
var url = '';
url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=';
url += apiKey;

$(document).ready(function() {
    $('#startSearch').click(function() {
        $("#images").hide;
        $("#images").empty();
        var searchText = $('#searchTextBox').val();
        $.get(url + '&tags=' + searchText + '&api_key=' + apiKey + '&per_page=1&extras=url_m', function(data)
        {
            var items = [];
            $(data).find("photo").each(function(index, value) {
                var ident = (value.id);
                var secret_id = $(value).attr('secret');
                var loc_id = $(value).attr('url_m');
                $("#images").append("<img class='img-thumbnail' src='" + loc_id + "' >");
                $("#images").slideDown('slow');
            });
        });
    });
});