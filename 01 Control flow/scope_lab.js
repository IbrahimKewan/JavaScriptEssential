{
  var scopedVar = "ursprünglich var";
  let scopedLet = "ursprünglich let";
  const scopedConst = "ursprünglich const";

  // Innerhalb des Blocks neu zuweisen
  scopedVar = "neu zugewiesen var";
  scopedLet = "neu zugewiesen let";
  // scopedConst = "neu zugewiesen const"; // ❌ wirft einen TypeError

  console.log("Innerhalb Block:");
  console.log(scopedVar);   // neu zugewiesen var
  console.log(scopedLet);   // neu zugewiesen let
  console.log(scopedConst); // ursprünglich const
}

console.log("Außerhalb Block:");

// Zugriff auf var möglich (function scoped → wird hoisted)
console.log(scopedVar); // neu zugewiesen var

// Zugriff auf let und const führt zu ReferenceError
// console.log(scopedLet);   // ❌ ReferenceError
// console.log(scopedConst); // ❌ ReferenceError

// Neuzuweisung außerhalb des Blocks
scopedVar = "außerhalb neu gesetzt";
console.log("Außerhalb neu zugewiesenes var:", scopedVar);

// scopedLet = "außerhalb neu gesetzt";   // ❌ ReferenceError
// scopedConst = "außerhalb neu gesetzt"; // ❌ ReferenceError
