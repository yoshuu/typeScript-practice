// interface PersonalInfo {
//   name: string;
//   age: number;
//   interest: string[];
// }

// function printInfo(info: PersonalInfo) {
//   console.log(`${info.name} is ${info.age} years old`);
//   console.log(`${info.name} is interested in ${info.interest.join(", ")}.`);
// }

// printInfo({
//   name: "Maxwell",
//   age: 18,
//   interest: ["drawing", "programming"],
// });

interface Duck {
  noise: string;
  feetCount: number;
}

const cat = {
  noise: "Mepw meow meow~~~~~~",
  feetCount: 4,

  nocturnal: true,
};

const duck: Duck = cat;
