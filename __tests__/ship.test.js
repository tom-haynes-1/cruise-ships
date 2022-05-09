const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');

describe('Ship', () => {
    describe('Ship with ports and an itinerary', () => {

        let dover; 
        let calais;
        
        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
            };

            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
            };

            itinerary = {ports: [dover, calais]};
            ship = new Ship(itinerary);
        });

        it('Ship can be instantiated', () => {

            expect(ship).toBeInstanceOf(Object);
        });
    
        it('Ship has a starting port', () => {
            
            expect(ship.currentPort).toBe(dover);
        });
    
        it('Ship can set sail', () => {
    
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
        });
    
        it('Ship can dock at a different port', () => {
    
            ship.setSail();
            ship.dock();
    
            expect(ship.currentPort).toBe(calais);
            expect(calais.addShip).toHaveBeenCalledWith(ship);
    
        });
    
        it('Ship gets added to the Port object upon instantiation', () => {
    
            expect(dover.addShip).toHaveBeenCalledWith(ship);
            
            });

        it('Ship can\'t set sail further than its itinerary', () => {

            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    
            }); 
        });
    });