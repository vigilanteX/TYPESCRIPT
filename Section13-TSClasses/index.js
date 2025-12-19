var Player = /** @class */ (function () {
    function Player(first, last) {
        //we cannot directly this.first=first; without declaring property first
        this.first = first;
        this.last = last;
    }
    return Player;
}());
var player = new Player("Sachin", "Tendulkar");
