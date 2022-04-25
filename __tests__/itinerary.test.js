const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

describe('Itinerary constructor', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});