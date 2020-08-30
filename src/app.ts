console.log('your code goes here .....!');

// Build in generics

const names: Array<string> = ['max', 'Manual'];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve('This is done'); //string refers to this string of resolve / reject
    } catch (error) {
      reject(error);
    }
  }, 2000);
});

// Our own generics

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'jklfslfs' }, { age: 34343 });
const mergedObj2 = merge({ name: 'jklfslfs' }, { age: 34343 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = 'Got no value';
  if (element.length > 0) {
    descriptionText = 'Got elements: ' + element.length;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hello')); // can be called with everything that has a length property : string, Array, ...

//The keyof Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: 'Carlos' }, 'name');

//Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Egon');
textStorage.addItem('Karlos');
textStorage.removeItem('Egon');

console.log(textStorage.getItems()); //only works for primitves not for objects because of removeItem's implementation

// Generic Utility Types

// Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
}

//Readonly

const myNames: Readonly<string[]> = ['max', 'Anna'];
// myNames.push('Karl'); // adding not possible