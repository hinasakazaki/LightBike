Bot.register("tsundere", function(game, player, move) {

  var me = game.me;
  var other = game.them;
    var board = game.board;
    var moves = board.safe_directions(me);
    var center = {x:15, y:7};
  
    //dictionary of distances from me to other after making a move
    var values = _.map(moves, function(dir){
      var coords = board.new_coords_from_dir(me, dir);
      return eval(board, coords, other);
    });

    function eval(board, here, there) {
      return (17.0/board.get_dist(here, there) + 170.0/board.get_dist(here, center) + 17.0*(board.safe_directions(here).length));
    }

    move(moves[values.indexOf(Math.max.apply(null, values))]);

})


// Bot.register("tsundere", function(game, player, move) {

// 	var me = game.me;
// 	var other = game.them;
//   	var board = game.board;
//   	var moves = board.safe_directions(me);
//   	var center = {x:14, y:7};
  
//   	//dictionary of distances from me to other after making a move
//   	var values = _.map(moves, function(dir){
//   		var coords = board.new_coords_from_dir(me, dir);
//   		return eval(board, coords);
//   	});

//   	function eval(board, here, there) {
//   		return (9001.0/board.get_dist(here, there) + 1337.0/board.get_dist(here, center));
//   	}

//   	function expectimax(game, move, depth) {
//   		if (game.winner() || depth == 0) {
//   			return eval(game.board, game.me, game.them)
//   		} else {
//   			their_moves = game.board.safe_directions(game.them);
//   			their_place = move(their_moves[Math.floor(Math.random() * their_moves.length)])

//   	}

//   	move(moves[values.indexOf(Math.max.apply(null, values))]);

// })