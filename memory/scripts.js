/**
 * This is where all jQuery code should go
 */
var images = [
	'images/hairy_otter.jpg',
	'images/dorca.jpg',
	'images/sharkopotamus.jpg',
	'images/ottersome.jpg',
	'images/goth.jpg',
	'images/elequad.jpg',
	'images/crocobear.jpg',
	'images/gorilephantaur.jpg',
	'images/horseckatoo.jpg',
	'images/swarca.jpg',
	'images/wortle.jpg',
	'images/frogodile.jpg',
	'images/eleala.jpg',
	'images/guinea_lion.jpg',
	'images/bobmunk.jpg',
	'images/foxudu.jpg',
	'images/ducat.jpg',
	'images/deeropard.jpg'
];
$(document).ready(function(){
	$('main').hide();
})

function Player(element) {
	this.pairs = 0;
	this.turns = 0;
	this.showTiles = element;
	this.showFound = null;
	this.found = function(img) {
		$(this.showTiles).append(img);
		this.pairs++;
		//showFound.innerHTML = pairs;
	};
}
var player = [];
var activePlayer = 0;

function settings() {
	var twoplayer = $('#twoplayer').is(':checked');
	if (twoplayer) {
		player = [new Player($('#player1')), new Player($('#player2'))];
		$('#player1, #player2').show();
	} else {
		player = [new Player($('#singleplayer'))];
		$('#singleplayer').show();
	}
	var pairs = $('#size').val();
	start(images.slice(0, pairs));
}

var pairsLeft;
var spot_size = 3.4;//em
function start(images) {
	var game = $('#game');
	game.show();
	game.css('height', Math.ceil(Math.sqrt(images.length*2))*spot_size+'em');
	$('#game, #singleplayer').css('width', Math.ceil(Math.sqrt(images.length*2))*spot_size+'em');
	$('#results, #settings').hide();
	$('main').show();

	pairsLeft = images.length;
	var list = images.concat(images);//two of each
	for (var i = 0; i < list.length; i++) {
		var tile = $('<span></span>').addClass('spot').attr('onClick', 'turn(this, ' + i%images.length + ')');
		var img = $('<img>').addClass('img').attr('src', list[i]);
		var back = $('<img>').addClass('back').attr('src', 'images/back.png');
		$(tile).append(img).append(back);
		list[i] = tile;
	}
	list.sort(function(){return Math.random()-0.5;});//simplest way to shuffle
	game.append(list);
}

function end() {
	if (player.length > 1) {
		var winner = 0;
		for (var i=1; i<player.length; i++)
			if (player[i].pairs > player[winner].pairs)
				winner = i;
			//if there is a tie the player who started first wins since starting is a disadvantage,
		$('#results').text('Player '+winner+' wins with '+player[winner].pairs+' pairs.');
	} else
		$('#results').text('You had '+(player[0].turns-player[0].pairs)+' misses.');
	$('#results, #play_again, #settings').show();
	$('.player, main').hide();
	$('.player .img, main .spot').remove();
}

function TurnedTile() {
	this.tile = null;
	this.imgIndex = null;
}
var first = new TurnedTile();
var second = new TurnedTile();

function turn(tile, imgIndex) {
	if (second.tile !== null)
		hideSelected();
	if (tile === first.tile  ||  tile === second.tile)
		return;//two tiles revealed: click again if you want to reveal the same spot again.
		      //one spot revealed: click another spot
	else if (first.tile !== null) {
		second.tile = tile;
		second.imgIndex = imgIndex;
		player[activePlayer].turns++;
		if (first.imgIndex === second.imgIndex) {
			setTimeout(function(){
				player[activePlayer].found($(tile).find('.img'));
				pairsLeft--;
				if (pairsLeft === 0)
					end();
			}, 1000);
			$(first.tile).animate({'opacity':0}, 'slow');
			$(second.tile).animate({'opacity':0}, 'slow');
			first.tile = second.tile = null;
		} else {
			timer = setTimeout(hideSelected, 2000);
			activePlayer++;
			if (activePlayer == player.length)
				activePlayer = 0;
		}
	} else {
		first.tile = tile;
		first.imgIndex = imgIndex;
	}
	$(tile).addClass('revealed');
}

var timer = setTimeout(function(){}, 0);
function hideSelected() {
	clearTimeout(timer);
	$(first.tile).removeClass('revealed');
	$(second.tile).removeClass('revealed');
	first.tile = second.tile = null;
}