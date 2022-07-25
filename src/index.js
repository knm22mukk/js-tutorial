// const,let関数宣言
// var val1 = "var変数宣言";
// console.log(val1);

// // var変数は上書き可能
// val1 = "変数を変更";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再度宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言が不可能
// let val2 = "let変数を再度宣言";

// const val3 = "const変数を宣言";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";
// const val3 = "const変数を再度宣言";

// // constでオブジェクトを定義 プロパティは変更可能
// const val4 = {
//   name: "MUKK",
//   age: 31
// };

// val4.name = "keita";
// val4.address = "tokyo";
// console.log(val4);

// // constで配列を定義、プロパティは変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name = "mukk";
// const age = 31;

// // 「私の名前はmukkです。年齢は31歳です。」
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);
// // テンプレート文字列を用いた方法

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//　関数
// function func1(str1) {
//   return str1;
// }
// console.log(func1("func1です"));

// //関数を先にconstで宣言
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数　　引数の括弧はなくても良い。
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// //処理が単一の場合はreturn {} がなくても動く
// const func3 = (str) => str;
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));

//分割代入

// オブジェクトで分割代入を使用
// const myProfile = {
//   name: "mukk",
//   age: 31
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳ですね。`;
// console.log(message2);

//配列で分割代入を使用する
// const myProfile = ["mukk", 31];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳ですね。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// デフォルト値、引数
// const sayHello = (name = "mukk") => {
//   console.log(`こんにちは、${name}さん！`);
// };
// sayHello();
// sayHello("guest");

// スプレット構文 ...

// //配列の展開
// const arr1 = [1, 2, 3, 4];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// map,filterを使った配列の処理
const nameArr = ["tanaka", "yamada", "saitou", "MUKK"];

// for
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

//map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

//filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(...newNumArr);

// const newNumArr2 = nameArr.map((name) => {
//   if (name === "MUKK") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNumArr2);

// 三項演算子

// 条件 ? true : false
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(20, 40));
// console.log(checkSum(50, 60));
