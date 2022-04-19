const Port = require('../src/port.js');

describe("Port", () => {
    it("Port can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object)
    });

    it("Port object has a name property", () => {
        const port = new Port('Southampton');

        expect(port.name).toBe('Southampton');

    });
});