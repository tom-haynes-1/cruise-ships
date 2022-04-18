const Ship = require('../src/ship.js');

describe('Ship', () => {
    it('Ship can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const ship = new Ship('Dover');
        
        expect(ship.startingPort).toBe('Dover');
    });
});