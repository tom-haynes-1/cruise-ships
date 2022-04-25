const Port = require('../src/port.js');

describe("Port", () => {
    it("Port can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object)
    });

    it("Port object has a name property", () => {
        const port = new Port('Southampton');

        expect(port.name).toBe('Southampton');
    });

    it('Port object can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('Port object can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);

    });
});