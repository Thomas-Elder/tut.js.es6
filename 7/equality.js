
/**
 * Comparisons.
 * 
 * Briefly, double equals will perform a type conversion when comparing two things; 
 * triple equals will do the same comparison without type conversion (by simply always 
 * returning false if the types differ); 
 * and Object.is will behave the same way as triple equals, but with special handling 
 * for NaN and -0 and +0 so that the last two are not said to be the same, 
 * while Object.is(NaN, NaN) will be true. 
 * 
 * (Comparing NaN with NaN ordinarily—i.e., using either double equals or triple 
 * equals—evaluates to false, because IEEE 754 says so.) 
 * 
 * Do note that the distinction between these all have to do with their handling of 
 * primitives; none of them compares whether the parameters are conceptually similar 
 * in structure. For any non-primitive objects x and y which have the same structure 
 * but are distinct objects themselves, all of the above forms will evaluate to false.
 * 
 * More infor here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 */