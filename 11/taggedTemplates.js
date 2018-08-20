
/**
 * Tagged templates
 * 
 * A template tag is a function performing a transformation on a template literal, returning a string. 
 * The signature of a tag function is the following:
 * 
 * tagFunction(literalFragments, ...substitutionValues)
 * 
 * literalFragments is an array of Strings that store fragments of the template literal. The original
 * template literal is split by substitutions. 
 * 
 * the rest parameter ...substitutionValues contains the values of the ${...} substitutions.
 */
