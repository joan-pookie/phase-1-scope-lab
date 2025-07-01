// 🚀 1. Declare global variable customerName as 'bob'
var customerName = 'bob';

// 2. upperCaseCustomerName – uppercases the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. setBestCustomer – declares a global variable bestCustomer and sets it to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // no var → becomes global
}

// 4. overwriteBestCustomer – updates the global bestCustomer to 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // reassign existing global
}

// 5. Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'alice';

// 6. changeLeastFavoriteCustomer – attempts to reassign the constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'charlie'; // ❌ TypeError at runtime
}

