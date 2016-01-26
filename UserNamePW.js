
// USER ID FUNCTION
isUserIdValid:
function isUserIdValid(a) {return (!a.includes("#") && !a.includes ("$") && !a.includes("!")) && a.length > 5;}

// PASSWORD FUNCTION
function isPasswordValid(b) {return (b.includes ("#") || b.includes ("!") || b.includes ("$")) && (!b.includes("password") && !b.includes("password!") && !b.includes("password$") && !b.includes("password#")) && b.length > 5 && digit(b) && hasLowerCase(b) && hasUpperCase(b); };

// DIGIT FUNCTION
function digit(str) { return /\d/.test(str);};

// PASSWORD CONTAINS ALL LOWER CASE FUNCTION
function hasUpperCase(str) { return str.toLowerCase() != str; };

// PASSWORD CONTAINS ALL UPPERCASE FUNCTION
function hasLowerCase(str) { return str.toUpperCase() != str;} ;

// USERNAME AND PASSWORD FUNCTION
function check(a, b) { return (!a.includes("#") && !a.includes ("$") && !a.includes("!")) && a.length > 5 &&(b.includes ("#") || b.includes ("!") || b.includes ("$")) && (!b.includes("password") && !b.includes("password!") && !b.includes("password$") && !b.includes("password#")) && b.length > 5 && digit(b) && hasLowerCase(b) && hasUpperCase(b);};

//a and b are now global variables that can be used anywhere
a = prompt("User ID: ");
b = prompt("Password: ");
alert("User ID and password is acceptable: " + check(a, b));
