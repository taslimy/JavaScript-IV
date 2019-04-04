// CODE here for your Lambda Classes

class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  // Method
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}// Person


// Instructor
class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
   this.catchPhrase = instructorAttributes.catchPhrase;
  }
  // Methods
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }

}

// Student
class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  // Methods
  listsSubjects() {
    return `${this.favSubjects}`; //?
  }
  PRAssignment(student, subject) {
    return `${student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(student, subject) {
    return `${student.name} has begun spring challenge on ${subject}`;
  }
}


// Project Managers
class ProjectManagers extends Instructor {
  constructor(managersAttributes) {
    super(managersAttributes);
    this.gradClassName = managersAttributes.favInstructor;
    this.favInstructor = managersAttributes.favInstructor;
  }
  // Methods
  standUp(name, channel) {
    return `${name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(name, student, subject) {
    return `${name} debugs ${student.name} 's code on ${subject}`;
  }
} // Project Managers




// # Objects # //

// Instructors
const ralph = new Instructor({
  name: 'Ralph',
  location: 'New York',
  age: 37,
  gender: 'M',
  specialty: 'Back-end',
  favLanguage: 'Python',
  catchPhrase: 'Bang, zoom, to the moon, Alice!'
});

const josh = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'M',
  specialty: 'Front-end',
  favLanguage: 'JavaScript',
  catchPhrase: 'Dont forget the homies'
});

// # #

// Students
const taslim = new Student({
  name: 'Taslim',
  age: 23,
  location: 'Mars',
  gender: 'M',
  previousBackground: 'Student Assistant',
  className: 'Web19',
  favSubjects: ['HTML','CSS','Photoshop']
});

const james = new Student({
  name: 'James',
  age: 28,
  location: 'Jupiter',
  gender: 'M',
  previousBackground: 'Librarian',
  className: 'Web19',
  favSubjects: ['Java', 'JavaScript', 'Python']
});


//##

// Project Managers
const mary = new ProjectManagers({
  name: 'Mary',
  location: 'Mercury',
  age: 37,
  gender: 'F',
  specialty: 'Fullstack',
  favLanguage: 'Ruby',
  catchPhrase: 'Computer says no',
  gradClassName: 'CS14',
  favInstructor: 'Josh'
});


const fred = new ProjectManagers({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "M",
  specialty: "Front-end",
  favLanguage: "Go",
  catchPhrase:
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight",
  gradClassName: 'CS22',
  favInstructor: 'Josh Knell'
});



// Console.logs also to see dunder proto from objs.

console.log(taslim.speak());
console.log(taslim.listsSubjects());
console.log(taslim.age);

console.log(taslim);

console.log(ralph);

console.log(josh);

console.log(james);

console.log(mary);

console.log(fred);
