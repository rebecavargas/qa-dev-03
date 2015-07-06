/**
 * Created by rebecavargas on 6/22/2015.
 */
var Table = function(size /*, numships*/){

  //creando una instancia de un objeto
  this.grid = [];

  this.size=size;

    this.ships = [];

  this.initGrid(size);
  this.initShips();


  this.ships.push((new Ship(3),[4,0]));

};
Table.prototype.initGrid = function(size){
  var EMPTY_CELL = '0';

  for (var i =0; i < size; i++){
    this.grid.push((EMPTY_CELL));
  }
}

//acomoda rlos barcos en la grilla y el barco es de tamano 3

Table.prototype.initShips = function(){
  // for(...numships)

  var shipID = 1; // first ship

  var shipSize = this.getShipRandomSize();//parseInt(Math.random()*2) + 1;

  var shipInitPos = this.getShipRandomPos(shipSize);

  var ship = new Ship(shipSize, shipInitPos)

  this.ships.push(ship);

 // var size = this.getShipRandomSize();
 // this.ship.pudh(new Ship(size,this.getShipRandomPos(size)));

  for(var j = shipInitPos.column; j< shipInitPos.getColumn()+ shipSize; j++){
    this.grid[j] = shipID;
  }
}
Table.prototype.getShipRandomSize = function()
{
  return parseInt(Math.random()*2) + 1;
}
Table.prototype.getShipRandomPos = function(shipSize)
{
  var column;
  var isFree = false;
  do{


    for(var i = column; i < column + shipSize ; i++)
    {
      column = parseInt(Math.random() *( this.size - shipSize));
      if(this.grid[i] != '0')
      {
        break;
      }
    }
    if(i == column + shipSize)
    {
        break;
    }
  }
  while(true)

    return new Axis(column,0);
}