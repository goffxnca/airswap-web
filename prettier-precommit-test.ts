// Testing Prettier with pre-commit hook

// Case 1: Properly formatted, should allow commit.
const situation1 = "this line is formatted with prettier before pre-hook ran";

// Case 2: Violates "tabWidth" and "useTabs", should block commit.
// const     situation2    =                    "this line has inconsistent spacings and uses tabs";

// Case 3: Incorrect import order, violates "importOrder" rule, should block commit.
// import Button from "./src/components/Button/Button"
// import React from 'react'; // Should be first

// Note: When testing each cases, uncomment only the relevant case and comment out the others.
// For invalid cases (Situations 2 & 3), I use an editor like nano to save without auto-formatting from Prettier
