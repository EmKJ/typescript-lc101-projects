// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
import { SpaceLocation } from "./SpaceLocation";

// Part 1: Declare (5) Variables With Type
const spacecraftNamePart1:string = 'Determination';
const speedMphPart1:number = 17500;
let kilometersToMars:number = 225000000;
const kilometersToTheMoon:number = 384400;
const milesPerKilometerPart1:number = 0.621;

// Part 2: Print Days to Mars
const milesToMars:number = kilometersToMars*milesPerKilometerPart1;
const hoursToMars:number = milesToMars/speedMphPart1;
const daysToMars:number = hoursToMars/24;

// Code an output statement here (use a template literal):
console.log('Part 2:');
console.log(`${spacecraftNamePart1} would take ${daysToMars} days to get to Mars.`);

// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocationPart1 (kilometersAway:number):number { 
    let milesAway:number = kilometersAway*milesPerKilometerPart1;
    let hoursToLocation:number = milesAway/speedMphPart1;
    let daysAway:number = hoursToLocation/24;
    return daysAway;
};

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log('Part 3:');
console.log(`${spacecraftNamePart1} would take ${getDaysToLocationPart1(kilometersToMars)} days to get to Mars.`);
console.log(`${spacecraftNamePart1} would take ${getDaysToLocationPart1(kilometersToTheMoon)} days to get to the Moon.`);

// Part 4: Create a Spacecraft Class
class Spacecraft {
    craftName:string;
    milesPerKilometer:number = 0.621;
    craftSpeedMph:number;
    constructor(name:string,speedMph:number){
        this.craftName = name;
        this.craftSpeedMph = speedMph;
    };

    getDaysToLocation (kilometersAway:number):number { 
        let milesAway:number = kilometersAway*milesPerKilometerPart1;
        let hoursToLocation:number = milesAway/speedMphPart1;
        let daysAway:number = hoursToLocation/24;
        return daysAway;
    };

    printDaysToLocation(location:SpaceLocation) {
        console.log(`${this.craftName} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
    
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination',17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log('Part 4:');
console.log(`${spaceShuttle.craftName} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
console.log(`${spaceShuttle.craftName} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
console.log('Part 5:');
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));