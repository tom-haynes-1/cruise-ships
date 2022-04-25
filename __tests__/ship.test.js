const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');

describe('Ship', () => {
    it('Ship can be instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

    it('Ship has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary);
        
        expect(ship.currentPort).toBe(port);
    });

    it('Ship can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship);
    });

    it('Ship can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);

    });

    it('Ship can\'t set sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');

    }); 

    it('Ship gets added to the Port object upon instantiation', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);

        expect(dover.ships).toContain(ship);

    });
});