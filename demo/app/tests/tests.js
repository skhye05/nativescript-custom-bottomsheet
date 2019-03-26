var CustomBottomsheet = require("nativescript-custom-bottomsheet").CustomBottomsheet;
var customBottomsheet = new CustomBottomsheet();

describe("greet function", function() {
    it("exists", function() {
        expect(customBottomsheet.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(customBottomsheet.greet()).toEqual("Hello, NS");
    });
});