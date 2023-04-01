interface PersonalInfo {
  name: string;
  age: number;
  interest: string[];
}

interface AccountInfo {
  email: string;
  password: string;
  subscribed: boolean;
}

interface UserAcoount extends PersonalInfo, AccountInfo {}
