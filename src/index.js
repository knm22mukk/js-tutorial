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
