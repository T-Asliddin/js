//////////////////1///////////////
let obj = { a: 2, b: 3, c: 4 };
let n = 3;
let res = {};
for (const i in obj) {
  res[i] = obj[i] * n;
}
console.log(res);

///////////////////2/////////////

function x(str) {
  let newstr = str.split(" ");
  let res = 0;
  for (const i in newstr) {
    if (newstr[i].includes("a")) {
      res += 1;
    }
  }
  console.log(res, "ta so'zda a harfi bor");
}
x(
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repellat ex, ratione voluptas libero assumenda quae aspernatur magnam odio ut!"
);

/////////////////// 3//////////////////////
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false,
  },
  {
    title: "Dunyoning ishlari",
    author: "O’tkir Hoshimov",
    read: true,
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    read: true,
  },
];

books.map((i) => {
  if (i.read !== true) {
    console.log(`${i.author} ning ${i.title} kitoboi o'qilmagan`);
  } else {
    console.log(`${i.author} ning ${i.title} kitoboi o'qilgan`);
  }
});

///////////////////////4///////////////////////////
let arr = ["text", "world", "laptop"];
let obj2 = {};
arr.forEach((str) => {
  obj2[str] = str.length;
});
console.log(obj2);

// ///////////////////////////  5  ////////////////////////

let animals = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

let newanimals = {};

animals.forEach((item) => {
  if (newanimals[item]) {
    newanimals[item]++;
  } else {
    newanimals[item] = 1;
  }
});

console.log(newanimals);

///////////////////////6//////////////////////

let people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

people.sort((a, b) => a.age - b.age);
let yosh = people[0].age;
let qari = people[people.length - 1].age;

console.log(qari - yosh);

///////////////////  7  ////////////////

let input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
let falsetrue = { true: [], false: [] };
for (const i in input) {
  if (input[i]) {
    falsetrue.true.push(input[i]);
  } else {
    falsetrue.false.push(input[i]);
  }
}
console.log(falsetrue);

////////////////////////   8 //////////////////////

function minManWord(str) {
  let newstr = str.split(" ");
  let minWord = newstr[0];
  let maxWord = newstr[0];
  newstr.forEach((i) => {
    if (i.length < minWord.length) {
      minWord = i;
    }
    if (i.length > maxWord.length) {
      maxWord = i;
    }
  });

  return {
    minWord,
    maxWord,
  };
}
console.log(minManWord("Men dasturlash kursida o’qiyman"));

////////////////////////// 10 ////////////////////

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 3;
matrix.map((i) => {
  i.map((item) => {
    if (item == target) {
      console.log(true);
    }
  });
});

///////////////////// 11 ///////////////////////

let matrixx = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
let numm = matrixx.length;
let newarr = [];
for (let a = 0; a < numm; a++) {
  newarr.push([]);
  for (const i in matrixx) {
    newarr[a].push(matrixx[i][a]);
  }
}
console.log(newarr);

/////////////////  12  ////////////////////////

let string =
  "sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping";
let newstring = string.split(" ");
console.log(newstring[newstring.length - 1].length);

/////////////////////  13  ////////////////////

let Input = { a: 2, b: 5, c: 7 };
let array = [];

for (const i in Input) {
  array.push(`${i}${Input[i]}`);
}
console.log(array);


////////////////////////////  14   ////////////////////////////

let findMedianSortedArrays = function (nums1, nums2) {
  let newarr = [...nums1, ...nums2].sort((a, b) => a - b);
  let leng = newarr.length;
  if (leng % 2 === 0) {
    let res = newarr[leng / 2 - 1] + newarr[leng / 2];
    console.log(res / 2);
  } else {
    console.log(newarr[Math.floor(leng / 2)]);
  }
};

findMedianSortedArrays([1, 2], [3, 4]);

// ////////////////////////  15  //////////////////////
function fn(animals) {
  let newanimals = {};
  let arr = [];
  animals.forEach((item) => {
    if (newanimals[item]) {
      newanimals[item]++;
    } else {
      newanimals[item] = 1;
    }
  });
  for (const i in newanimals) {
    if (newanimals[i] > 1) {
      arr.push(i);
    }
  }
  console.log(arr);
}
fn(["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"]);

//////////////////////////  16  //////////////////////////

let products = [
  { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
];

products = products.filter((item) => item.id !== 4);

console.log(products);

/////////////////////////////  17  /////////////////////////

let inputs = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

inputs.sort((a, b) => a.age - b.age);
let young = inputs[0].age;
let old = inputs[inputs.length - 1].age;

console.log(old - young);










