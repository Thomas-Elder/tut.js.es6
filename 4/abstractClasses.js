/*eslint no-unused-vars: "off"*/

/**
 * Abstract classes are classes that cannot be instantiated. They exist to abstract
 * common behaviour/functionality out of a group of similar classes. 
 */

class ChartView {
  constructor() {
    if (new.target === ChartView) {
      throw new Error('Abstract class ChartView cannot be instantiated')
    }
  }
}

// is this really how you're meant to enforce abstract class behaviour??!!

class Chart extends ChartView {}

let cv = new ChartView() // throws that error when you run it
let c = new Chart()
