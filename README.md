# SpendWise

SpendWise is a personal budget dashboard. Weeks 1-4 built the visual layout (HTML, CSS, Grid and Flexbox). **Week 5** adds the JavaScript foundation: the app can now collect budget information from the user, perform calculations, and report the results.

## Files

| File | Purpose |
|---|---|
| `index.html` | Dashboard structure: sidebar, header, six category cards; loads `script.js` at the end of `<body>` |
| `style.css` | Theme, layout, responsive rules, card animations, dark theme |
| `script.js` | The JavaScript logic: data, input, calculations, functions, console report |
| `README.md` | This file |

## What SpendWise does

When the page loads, SpendWise asks you for your **monthly budget** and then how much you spent on **Food, Transport, Rent, Entertainment, Utilities** and set aside as **Savings**. It calculates the total spent, the **remaining balance** and the **percentage of the budget used**, then prints a clearly labelled report in the browser console.

### How to run it
1. Open `index.html` in a browser.
2. Answer each prompt that appears.
3. Press **F12** (or right-click → Inspect) and open the **Console** tab to see the report.
4. Refresh the page to run it again.

### Sample console output
```
==============================
SpendWise Budget Report - November 2026
==============================
Monthly budget:      KES 50,000
------------------------------
Food:                KES 8,400
Transport:           KES 3,200
Rent:                KES 15,000
Entertainment:       KES 1,800
Utilities:           KES 2,300
Savings set aside:   KES 6,500
------------------------------
Total spent:         KES 37,200
Remaining balance:   KES 12,800
Budget used:         74.4%
Over budget?         false
Status:              On track: you are within your budget.
==============================
```

## JavaScript concepts implemented

- Linking an external script and confirming it loaded (`console.log`)
- Variables with `const` and `let`
- Data types: strings, numbers and a boolean
- User input with `prompt()`, converting text to numbers with `Number()`
- Input validation with `isNaN()`, a `while` loop and handling `null` (Cancel)
- Arithmetic calculations
- Conditions with `if / else if / else`
- Functions with parameters and return values
- String concatenation, `toFixed()` and `toLocaleString()`
- Output with `console.log()`

## How variables are used

- **`const`** is used for values that never change: `appName`, `currency` and `monthName`.
- **`let`** is used for values that change while the program runs:
  - Budget data: `monthlyBudget`
  - Expense data: `foodSpent`, `transportSpent`, `rentSpent`, `entertainmentSpent`, `utilitiesSpent`, `savingsSetAside`
  - Calculated results: `totalSpent`, `remainingBalance`, `percentUsed`
- **Data types:** names and currency are *strings*, money values are *numbers*, and `isOverBudget` is a *boolean* (`true` or `false`).

## How user input is collected

`runSpendWise()` calls the helper function `askForNumber(message)` once for each value. It:
1. Shows a `prompt()` asking for the amount.
2. Converts the answer from text to a number with `Number()`.
3. Checks that the answer is not empty, not `NaN` and not negative. If it is invalid, it asks again with an "Invalid input" message.
4. Returns `0` if the user presses Cancel, so the program never gets stuck.

The returned numbers are stored in the variables listed above.

## How calculations are performed

1. **Total spent** = food + transport + rent + entertainment + utilities + savings.
2. **Remaining balance** = monthly budget − total spent. A negative result means overspending.
3. **Percent used** = (total spent ÷ monthly budget) × 100. If the budget is 0, the result is 0 to avoid dividing by zero.
4. **Over budget?** = `remainingBalance < 0`, stored as a boolean.

For the sample above: 8,400 + 3,200 + 15,000 + 1,800 + 2,300 + 6,500 = 37,200; 50,000 − 37,200 = 12,800; 37,200 ÷ 50,000 × 100 = 74.4%.

## How functions help organize the code

Each function does one job, so the code is easier to read, test and reuse:

| Function | Job |
|---|---|
| `askForNumber(message)` | Gets and validates one number from the user |
| `calculateTotalSpent(...)` | Adds all expenses and savings |
| `calculateRemaining(budget, spent)` | Returns the remaining balance |
| `calculatePercentUsed(budget, spent)` | Returns the percentage of the budget used |
| `formatMoney(amount)` | Formats a number as `KES 12,500` |
| `getBudgetStatus(remaining, percent)` | Returns a status message (over budget, careful, or on track) |
| `displayReport()` | Prints the labelled report to the console |
| `runSpendWise()` | Runs everything in order: input, then calculations, then output |

## Testing
The logic was tested with normal values, with an invalid entry (letters) that triggered the re-prompt, and the calculations were checked by hand against the sample output above. Please also test a budget lower than your expenses to see the "Over budget" message.
