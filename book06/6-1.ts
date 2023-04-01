interface Vic {
  name: string;

  // 可加可不加，可選的意思
  // age?: number;

  readonly sex: "man" | "female";
}

const vic: Vic = {
  name: "vic",
  sex: "man",
};

// vic.sex = "man";
