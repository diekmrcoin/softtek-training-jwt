const jwt = require("jsonwebtoken");
const secret = "shhh!";

// Create a payload
const payload = {
  id: 1,
  username: "John Doe",
};
console.log("Payload:", payload);
console.log("\n");

// Create a new JWT
const token = jwt.sign(payload, secret, { noTimestamp: true });
console.log("Token:", token);
console.log("\n");

// Print parts and decode each
const parts = token.split(".");

console.log("Header");
console.log("Header:", parts[0]);
console.log("Header:", Buffer.from(parts[0], "base64").toString());
console.log("\n");

console.log("Payload");
console.log("Payload:", parts[1]);
console.log("Payload:", Buffer.from(parts[1], "base64").toString());
console.log("\n");

console.log("Signature");
console.log("Signature:", parts[2]);
console.log("\n");

// Decode the JWT
const decoded = jwt.verify(token, secret);
console.log("Decoded:", decoded);
console.log("\n");
