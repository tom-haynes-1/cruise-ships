const Ship = require('../src/ship.js');
const Port = require('../src/port.js');

describe('Ship', () => {
    it('Ship can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('Ship has a starting port', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        
        expect(ship.currentPort).toBe(port);
    });

    it('Ship can set sail', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });

    it('Ship can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);

    });
});