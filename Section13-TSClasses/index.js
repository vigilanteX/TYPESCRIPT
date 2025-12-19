var Player = /** @class */ (function () {
    function Player(first, last) {
        this.score = 0; //this works as well as we have assigned value to it and it can infer type number
        //we cannot directly this.first=first; without declaring property first
        this.first = first;
        this.last = last;
    }
    return Player;
}());
var player = new Player("Sachin", "Tendulkar");
//player.first="MS";//Cannot assign to 'first' because it is a read-only property.
