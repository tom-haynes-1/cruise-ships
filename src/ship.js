const startingPort = 'Dover';

class Ship {
    constructor(name) {
        this.name = name;
        this.startingPort = startingPort;
    }

    setSail() {
        this.startingPort = null;
    }
};

// function Ship(name) {
//     this.name = name;
//     this.startingPort = startingPort;

// };

// Ship.prototype.setSail = function() {
//     this.startingPort = null;
// };


module.exports = Ship;