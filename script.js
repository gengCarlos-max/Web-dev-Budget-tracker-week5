// =====================================================
// SpendWise - Week 5: JavaScript foundation
// Collects budget info with prompts, calculates the
// remaining balance, and shows a labelled report in the console.
// =====================================================

console.log("SpendWise script loaded successfully.");

// ---------- 1. Application data (variables) ----------
const appName = "SpendWise";          // string
const currency = "KES";               // string (never changes, so const)
const monthName = "November 2026";    // string

let monthlyBudget = 0;                // number: money available this month
let foodSpent = 0;                    // number: expense data
let transportSpent = 0;
let rentSpent = 0;
let entertainmentSpent = 0;
let utilitiesSpent = 0;
let savingsSetAside = 0;

let totalSpent = 0;                   // number: calculated later
let remainingBalance = 0;             // number: calculated later
let percentUsed = 0;                  // number: calculated later
let isOverBudget = false;             // boolean: true when spending is above budget


// ---------- 2. Functions ----------

// Asks the user for a number and keeps asking until the answer is valid.
function askForNumber(message) {
    let answer = prompt(message);

    // prompt() returns null when the user presses Cancel
    if (answer === null) {
        console.log("No value entered for: " + message + " (using 0)");
        return 0;
    }

    let value = Number(answer);

    while (answer.trim() === "" || isNaN(value) || value < 0) {
        answer = prompt("Invalid input. Please enter a number that is 0 or more.\n\n" + message);
        if (answer === null) {
            console.log("No value entered for: " + message + " (using 0)");
            return 0;
        }
        value = Number(answer);
    }

    return value;
}

// Adds up all the money spent or set aside.
function calculateTotalSpent(food, transport, rent, entertainment, utilities, savings) {
    return food + transport + rent + entertainment + utilities + savings;
}

// Budget minus total spent. A negative result means overspending.
function calculateRemaining(budget, spent) {
    return budget - spent;
}

// What percentage of the budget has been used (guards against dividing by 0).
function calculatePercentUsed(budget, spent) {
    if (budget === 0) {
        return 0;
    }
    return (spent / budget) * 100;
}

// Turns a number into text like "KES 12,500".
function formatMoney(amount) {
    return currency + " " + amount.toLocaleString();
}

// Returns a short message describing the budget situation.
function getBudgetStatus(remaining, percent) {
    if (remaining < 0) {
        return "Over budget! You have overspent by " + formatMoney(Math.abs(remaining)) + ".";
    } else if (percent >= 80) {
        return "Careful: you have used " + percent.toFixed(1) + "% of your budget.";
    } else {
        return "On track: you are within your budget.";
    }
}

// Prints everything to the console with clear labels.
function displayReport() {
    console.log("==============================");
    console.log(appName + " Budget Report - " + monthName);
    console.log("==============================");
    console.log("Monthly budget:      " + formatMoney(monthlyBudget));
    console.log("------------------------------");
    console.log("Food:                " + formatMoney(foodSpent));
    console.log("Transport:           " + formatMoney(transportSpent));
    console.log("Rent:                " + formatMoney(rentSpent));
    console.log("Entertainment:       " + formatMoney(entertainmentSpent));
    console.log("Utilities:           " + formatMoney(utilitiesSpent));
    console.log("Savings set aside:   " + formatMoney(savingsSetAside));
    console.log("------------------------------");
    console.log("Total spent:         " + formatMoney(totalSpent));
    console.log("Remaining balance:   " + formatMoney(remainingBalance));
    console.log("Budget used:         " + percentUsed.toFixed(1) + "%");
    console.log("Over budget?         " + isOverBudget);
    console.log("Status:              " + getBudgetStatus(remainingBalance, percentUsed));
    console.log("==============================");
}

// Runs the whole program: input -> calculations -> output.
function runSpendWise() {
    // Collect user input
    monthlyBudget = askForNumber("Welcome to " + appName + "!\n\nEnter your total monthly budget (" + currency + "):");
    foodSpent = askForNumber("How much did you spend on FOOD? (" + currency + ")");
    transportSpent = askForNumber("How much did you spend on TRANSPORT? (" + currency + ")");
    rentSpent = askForNumber("How much did you spend on RENT? (" + currency + ")");
    entertainmentSpent = askForNumber("How much did you spend on ENTERTAINMENT? (" + currency + ")");
    utilitiesSpent = askForNumber("How much did you spend on UTILITIES? (" + currency + ")");
    savingsSetAside = askForNumber("How much did you set aside as SAVINGS? (" + currency + ")");

    // Calculations
    totalSpent = calculateTotalSpent(foodSpent, transportSpent, rentSpent, entertainmentSpent, utilitiesSpent, savingsSetAside);
    remainingBalance = calculateRemaining(monthlyBudget, totalSpent);
    percentUsed = calculatePercentUsed(monthlyBudget, totalSpent);
    isOverBudget = remainingBalance < 0;

    // Output
    displayReport();
}


// ---------- 3. Start the program ----------
// A short delay lets the dashboard finish drawing before the prompts appear.
setTimeout(runSpendWise, 300);
