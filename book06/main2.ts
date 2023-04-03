interface Person {
  address: {
    city: string;
    temperature: number;
  };
}

// interface Address {
//   city: string;
//   temperature: number;
// }
// interface Person {
//   address: Address;
// }

const addr: Person["address"] = {
  city: "tainan",
  temperature: 10,
};
