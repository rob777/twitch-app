var $streamers = ["cretetion", "freecodecamp", "storbeck", "OgamingSC2", "terakilobyte", "habathcx", "ESL_SC2", "RobotCaleb", "brunofin", "comster404", "thomasballinger", "noobs2ninjas", "beohoff"];

$(document).ready(function () {
    for (var i = 0; i < $streamers.length; i++) {
        (function (i) {
            $.getJSON('https://api.twitch.tv/kraken/streams/' + $streamers[i], function (data) {
                if (data.stream === null) {
                    $('.container').append('<div class="row offline"><div class="col-sm-1 col-xs-2"><img class="avatar" src="http://www.valueselling.be/Resources/profle.png" alt="avatar"></div><div class="col-sm-3 col-xs-10"><a href="https://www.twitch.tv/' + $streamers[i] + '" target="_blank"><span class="text">' + $streamers[i] + '</span></a></div><div class="col-sm-8 col-xs-10"><span class="text">Offline</span></div></div>');
                } else {
                    $('.container').append('<div class="row online"><div class="col-sm-1 col-xs-2"><img class="avatar" src="' + data.stream.channel.logo + '" alt="avatar"></div><div class="col-sm-3 col-xs-10"><a href="https://www.twitch.tv/' + $streamers[i] + '" target="_blank"><span class="text">' + $streamers[i] + '</span></a></div><div class="col-sm-8 col-xs-10"><span class="text">' + data.stream.game + ': ' + data.stream.channel.status + '</span></div></div>');
                }
            }).fail(function () {
                $('.container').append('<div class="row offline"><div class="col-sm-1 col-xs-2"><img class="avatar" src="http://www.valueselling.be/Resources/profle.png" alt="avatar"></div><div class="col-sm-3 col-xs-10"><a href="https://www.twitch.tv/' + $streamers[i] + '" target="_blank"><span class="text">' + $streamers[i] + '</span></a></div><div class="col-sm-8 col-xs-10"><span class="text">Account Closed</span></div></div>');
            });
        })(i);
    };
    $('#all').addClass('active');
});

$('#online').on('click', function () {
    $('#offline').removeClass('active');
    $('#all').removeClass('active');
    $('#online').addClass('active');
    $('.offline').hide();
    $('.online').show();
});

$('#offline').on('click', function () {
    $('#online').removeClass('active');
    $('#all').removeClass('active');
    $('#offline').addClass('active');
    $('.online').hide();
    $('.offline').show();
});

$('#all').on('click', function () {
    $('#online').removeClass('active');
    $('#offline').removeClass('active');
    $('#all').addClass('active');
    $('.online').show();
    $('.offline').show();
});