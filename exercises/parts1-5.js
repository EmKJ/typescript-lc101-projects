"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftNamePart1 = 'Determination';
var speedMphPart1 = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometerPart1 = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometerPart1;
var hoursToMars = milesToMars / speedMphPart1;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
console.log('Part 2:');
console.log("".concat(spacecraftNamePart1, " would take ").concat(daysToMars, " days to get to Mars."));
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocationPart1(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometerPart1;
    var hoursToLocation = milesAway / speedMphPart1;
    var daysAway = hoursToLocation / 24;
    return daysAway;
}
;
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log('Part 3:');
console.log("".concat(spacecraftNamePart1, " would take ").concat(getDaysToLocationPart1(kilometersToMars), " days to get to Mars."));
console.log("".concat(spacecraftNamePart1, " would take ").concat(getDaysToLocationPart1(kilometersToTheMoon), " days to get to the Moon."));
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.craftName = name;
        this.craftSpeedMph = speedMph;
    }
    ;
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * milesPerKilometerPart1;
        var hoursToLocation = milesAway / speedMphPart1;
        var daysAway = hoursToLocation / 24;
        return daysAway;
    };
    ;
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.craftName, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log('Part 4:');
console.log("".concat(spaceShuttle.craftName, " would take ").concat(spaceShuttle.getDaysToLocation(kilometersToMars), " days to get to Mars."));
console.log("".concat(spaceShuttle.craftName, " would take ").concat(spaceShuttle.getDaysToLocation(kilometersToTheMoon), " days to get to the Moon."));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
console.log('Part 5:');
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
