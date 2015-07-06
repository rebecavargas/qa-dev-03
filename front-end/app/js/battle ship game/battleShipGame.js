/**
 * Created by rebecavargas on 6/25/2015.
 */
/**
 * Created by rebecavargas on 6/25/2015.
 */
var BattleShipGame = function(numPlayers,size)
{
    console.log('starting the game for', numPlayers,'players' );

    this.players = [];

    this.init();
    this.start();

this.init(numPlayers, size);

};

BattleShipGame.prototype.init = function(numPlayers,size)
{
    for (var i = 0; i < numPlayers; i++){

        var playerName = 'Player' + i;
        var playerTable = new Table(size);
        var player = new Player(playerName,playerTable);
        this.players.push(player);
    };
};

BattleShipGame.prototype.start = function()
{
    this.printTables();
    //init loop
    var input = window.prompt('shot?'); //0,1
    console.log('shot is:', input)
    //end loop
};

BattleShipGame.prototype.PrintTables = function()
{

    //init loop

    console.log('Table', this.players[0]. table.grid.join('_'));
    //end loop
};