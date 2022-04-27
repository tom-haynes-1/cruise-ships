const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

describe('Itinerary constructor', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        const dover = jest.fn();
        const calais = jest.fn();

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});