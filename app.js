console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    // Check if count is negative
    if (count < 0) {
        console.log("Error: Negative count is not allowed.");
        return;
    }
    
    // Loop from 1 to count
    for (let i = 1; i <= count; i++) {
        // Check if current number is odd
        if (i % 2 !== 0) {
            // Print odd number
            console.log(i);
        }
    }
}

// Test the function
printOdds(10); // Print odd numbers from 1 to 10
printOdds(15); // Print odd numbers from 1 to 15
printOdds(-5); // Test negative count

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    // Check if userName or age parameter is not provided
    if (!userName || !age) {
        console.log("Error: Please provide both userName and age.");
        return;
    }

    // Check if age is below 16
    if (age < 16) {
        // Print message for age below 16
        console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
    } else {
        // Print message for age 16 or above
        console.log(`Congrats ${userName}, you can drive!`);
    }
}

// Test the function
checkAge("Alice", 14); // Output: Sorry Alice, but you need to wait until you're 16.
checkAge("Bob", 18);   // Output: Congrats Bob, you can drive!
checkAge(); // Output: Error: Please provide both userName and age.

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
    // Check if either x or y coordinate is zero
    if (x === 0 && y === 0) {
        console.log("The point is at the origin.");
    } else if (x === 0) {
        console.log(`The point (${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
        console.log(`The point (${x}, ${y}) is on the x axis.`);
    } else {
        // Check which quadrant the point lies in
        if (x > 0 && y > 0) {
            console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
        } else if (x < 0 && y > 0) {
            console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
        } else if (x < 0 && y < 0) {
            console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
        } else {
            console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
        }
    }
}

// Test the function
whichQuadrant(0, 2);    // Output: The point (0, 2) is on the y axis.
whichQuadrant(1, 2);    // Output: The point (1, 2) is in Quadrant 1.
whichQuadrant(-6, 18);  // Output: The point (-6, 18) is in Quadrant 2.
whichQuadrant(-3, -4);  // Output: The point (-3, -4) is in Quadrant 3.
whichQuadrant(4, -5);   // Output: The point (4, -5) is in Quadrant 4.
whichQuadrant(0, 0);    // Output: The point is at the origin.


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(side1, side2, side3) {
    // Check if sides form a valid triangle
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        // Check type of triangle
        if (side1 === side2 && side2 === side3) {
            return "equilateral";
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            return "isosceles";
        } else {
            return "scalene";
        }
    } else {
        return "invalid triangle";
    }
}

// Test the function
console.log(triangleType(1, 2, 2));   // Output: isosceles
console.log(triangleType(1, 1, 2));   // Output: invalid triangle
console.log(triangleType(3, 4, 5));   // Output: scalene
console.log(triangleType(5, 5, 5));   // Output: equilateral



// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage) {
    const daysRemaining = 30 - day;
    const averageDailyUse = usage / day;
    const remainingData = planLimit - usage;
    const remainingAverage = remainingData / daysRemaining;

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${averageDailyUse.toFixed(3)} GB/day`);

    if (averageDailyUse > remainingAverage) {
        const exceedAmount = usage - (planLimit / 2);
        console.log(`You are EXCEEDING your average daily use (${averageDailyUse.toFixed(3)} GB/day),`);
        console.log(`continuing this high usage, you'll exceed your data plan by`);
        console.log(`${exceedAmount.toFixed(1)} GB.`);
        console.log(`To stay below your data plan, use no more than ${remainingAverage.toFixed(2)} GB/day.`);
    } else {
        console.log(`You are within your data plan.`);
        console.log(`You can use up to ${remainingAverage.toFixed(2)} GB/day to stay within your plan.`);
    }
}

// Test the function
dataPlanStatus(100, 15, 56);
