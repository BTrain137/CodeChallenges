// helper function, compares objects insensitive to field order
// function equalsAtomically(obj1, obj2) {
//     if (Object.keys(obj1).length == Object.keys(obj2).length) {
//         for (var k in obj1) {
//             if (obj1[k] != obj2[k]) return false;
//         }
//         return true;
//     }
//     return false;
// }

// Test.expect(equalsAtomically(parseMolecule("H2O"), {H: 2, O: 1}), "Should parse water");
// Test.expect(equalsAtomically(parseMolecule("Mg(OH)2"), {Mg: 1, O: 2, H: 2}), "Should parse magnesium hydroxide: Mg(OH)2");
// Test.expect(equalsAtomically(parseMolecule("K4[ON(SO3)2]2"), {K: 4, O: 14, N: 2, S: 4}), "Should parse Fremy's salt: K4[ON(SO3)2]2");

/**
Should parse water H2O
Should parse diborane: B2H6
Should parse glucose: C6H12O6
Should parse molybdenum hexacarbonyl: Mo(CO)6
Should parse magnesium hydroxide: Mg(OH)2
Should parse ferrocene: Fe(C5H5)2
Should parse cyclopentadienyliron dicarbonyl dimer: (C5H5)Fe(CO)2CH3
Should parse tetrakis(triphenylphosphine)palladium(0): Pd[P(C6H5)3]4
Should parse Fremy's salt: K4[ON(SO3)2]2
Should parse really weird molecule: As2{Be4C5[BCo3(CO2)3]2}4Cu5
Should parse hexol sulphate: {[Co(NH3)4(OH)2]3Co}(SO4)3
Should parse maleic acid: C2H2(COOH)2
 */