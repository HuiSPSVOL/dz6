// Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок і повертає новий рядок,
//     у якому кожен символ повторюється двічі hello ⇒ hheelllloo.
 function doubleLetter(str) {
    let hello = "";
    for (let i=0; i<str.length; i++){
        hello+=str[i] + str[i]
    } return hello
 }
 console.log (doubleLetter("hello"))