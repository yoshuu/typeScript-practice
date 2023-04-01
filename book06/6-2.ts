// interface PersonalInfo {
//   name: string;
//   age: number;
//   interest: string[];
// }

// interface UserAccount extends PersonalInfo {
//   email: string;
//   password: string;
//   subscribed: boolean;
// }

interface Vic2 {
  name: string;
  age: number;
}

interface Vic21 extends Vic2 {
  name: number;
  // age: number;
}

// const vic2: Vic2 extends Vic3 {
//   name: string
// }
