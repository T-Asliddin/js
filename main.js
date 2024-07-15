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

///////////////////////5//////////////////////

const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// animals.map(item=>{
//     for (const i in item) {
//         console.log(i);
//     }
// })

for (const i in animals) {
    for (const a in animals) {
        if (animals[i]===animals[a]) {
            console.log(animals[i]);
        }
    }
}