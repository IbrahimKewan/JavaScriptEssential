// Globaler Bereich
var globalVar = "Ich bin eine globale Variable";
let globalLet = "Ich bin auch global, aber mit let scoped";
const globalConst = "Ich bin eine globale Konstante";

{
    // Blockbereich
    var blockVar = "Ich bin eine block-scope var";
    let blockLet = "Ich bin eine block-scope let";
    const blockConst = "Ich bin eine block-scope const";
}

// Globaler Gültigkeitsbereich
console.log(globalVar);    // Ausgabe: "Ich bin eine globale Variable"
console.log(globalLet);    // Ausgabe: "Ich bin auch global, aber mit let scoped"
console.log(globalConst);  // Ausgabe: "Ich bin eine globale Konstante"

// Block Scope
console.log(blockVar);     // Ausgabe: "Ich bin eine block-scope var"
console.log(blockLet);     // ReferenceError
console.log(blockConst);   // ReferenceError

// Funktionsbereich
function show() {
    var functionVar = "Ich bin eine block-scope Variable";
    let functionLet = "Ich bin ein block-scope let";
    const functionConst = "Ich bin ein block-scope const";
}
show();

console.log(functionVar);   // ReferenceError
console.log(functionLet);   // ReferenceError
console.log(functionConst); // ReferenceError
