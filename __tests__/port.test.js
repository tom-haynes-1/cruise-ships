const Port = require('../src/port.js');
// const Ship = require('../src/ship.js');

describe("Port constructor", () => {
    describe('can have ports and itinerary', () => {

        let ship;
        let dover;
        let itinerary;
    });

        beforeEach(() => {
          dover = new Port('Dover');
        });

    it("Port can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object)
    });

    it("Port object has a name property", () => {
        expect(dover.name).toBe('Dover');
    });

    it('Port object can add a ship', () => {
        const ship = jest.fn();

        dover.addShip(ship);

        expect(dover.ships).toContain(ship);
    });

    it('Port object can remove a ship', () => {
        const titanic = jest.fn();
        const queenMary = jest.fn();

        dover.addShip(titanic);
        dover.addShip(queenMary);
        dover.removeShip(queenMary);

        expect(dover.ships).toEqual([titanic]);

    });
});