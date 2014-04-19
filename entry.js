Bot.register("tsundere", function(game, player, move) {

	var me = game.me;
	var other = game.them;
  	var board = game.board;
  	var moves = board.safe_directions(me);
  	var center = {x:14, y:7};
  
  	//dictionary of distances from me to other after making a move
  	var values = _.map(moves, function(dir){
  		var coords = board.new_coords_from_dir(me, dir);
    	return (300.0/board.get_dist(coords, other) + 1337.0/board.get_dist(coords, center));
  	});

  	move(moves[values.indexOf(Math.max.apply(null, values))]);

})