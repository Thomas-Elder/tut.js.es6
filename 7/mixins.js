
/**
 * This is some shit. 
 * 
 * The syntax of calling Object.assign is as follows:
 * Object.assign( targetObject, ...sourceObjects )
 * 
 * The return value of Object.assign is targetObject. 
 * 
 * The side-effect of calling Object.assign is that targetObject is mutated.
 * 
 * Object.assign makes a shallow copy of the properties and operations of ...sourceObjects into targetObject.
 * 
 */

let horse = {
  horseName : 'QuickBucks',
  toString : function() {
    return this.horseName;
  }
};

let rider = {
  riderName : 'Frank',
  toString : function() {
    return this.riderName;
  }
};

let horseRiderStringUtility = {
  toString : function() {
    return this.riderName + ' on ' + this.horseName;
  }
};

let racer = Object.assign(
  {},
  horse,
  rider,
  horseRiderStringUtility
);

console.log(racer.toString());

/**
 * Had we omitted the {} from the assembly of the racer object, seemingly, nothing would have 
 * changed, as racer.toString() would still have been "Frank on QuickBucks". 
 * 
 * However, notice that horse would have been === equivalent to racer, meaning, that the 
 * side-effect of executing Object.assign would have been the mutation of the horse object.
 */

/**
 * This is all a bit above my head, so I'm just going to move on. 
 */