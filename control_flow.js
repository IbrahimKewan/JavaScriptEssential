// Step 2: if…else for userRole
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

// Step 3: nested if…else for isLoggedIn
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

// Step 4: switch for userType
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Step 5: ternary operator
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Practice Task: role-based access system
let personRole = "Enrolled Member";
let serviceMessage;

if (personRole === "Employee") {
    serviceMessage = "Access to Dietary Services granted.";
} else if (personRole === "Enrolled Member") {
    serviceMessage = "Access to Dietary Services and one-on-one interaction with a dietician granted.";
} else if (personRole === "Subscriber") {
    serviceMessage = "Partial access to Dietary Services granted.";
} else {
    serviceMessage = "Please subscribe or enroll to access Dietary Services.";
}

console.log("Service Message:", serviceMessage);
