const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');

describe('Ship', () => {
    describe('Ship with ports and an itinerary', () => {

        let ship;
        let dover; 
        let calais;
        let itinerary;

        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
    
            expect(ship).toBeInstanceOf(Object);
        });
    
        it('Ship has a starting port', () => {
            
            expect(ship.currentPort).toBe(dover);
        });
    
        it('Ship can set sail', () => {
    
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(dover.ships).not.toContain(ship);
        });
    
        it('Ship can dock at a different port', () => {
    
            ship.setSail();
            ship.dock();
    
            expect(ship.currentPort).toBe(calais);
            expect(calais.ships).toContain(ship);
    
        });
    
        it('Ship can\'t set sail further than its itinerary', () => {
    
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    
        }); 
    
        it('Ship gets added to the Port object upon instantiation', () => {
    
            expect(dover.ships).toContain(ship);
            
            });
        });
    });