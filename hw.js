

//! let text = "Створити та викликати функцію, яка буде приймати текст та перевіряти його на спам. Якщо спам є, повертати true. В іншому випадку false. Функція має бути нечутливою до регістру. Спам слова - VIP, SALE."

// let text = "Having a VIP client experience works sort of like a domino effect, and all the pieces that fall are the amazing benefits.";

// let text = "Shop the sale online at H&M and stock up on lots of great deals!";

// let text = "UNIQLO LifeWear combines high performance technology and functional design for an affordable."

// function spam (text) {
//     let lower = text.toLowerCase();
//     if(lower.includes("vip" || "false")){
//         return true;
//     } else {
//         return false;
//     }
// }
// alert(spam(text));



//! 2. Створити та викликати функцію, яка буде приймати рядок і кількість символів(n). Якщо довжина рядка більше за n символів, виводити скорочений рядок у консоль та вставляти три крапки. Якщо довжина рядка менше за n символів, виводити рядок без змін.
    
//     Для прикладу:
//     **115 років від дня народження Чень Цзінь ⇒ 115 років від ….**


// let string = "115 років від дня народження Чень Цзінь";
// let maxSymbol = 13;
// let continued = " ..."
// let stringSlice= "";
// function blablabla (string, maxSymbol) {
//     let stringLength = string.length;
//     if(stringLength >= maxSymbol) {
//         stringSlice = string.slice(0, maxSymbol);
//         return(stringSlice.concat(continued));
//     } else {
//         return string;
//     }

// }
// console.log(blablabla (string, maxSymbol));
