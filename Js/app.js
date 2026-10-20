// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) => [1]
// printArray(3) => [1, 2, 3]
// printArray(6) => [1, 2, 3, 4, 5, 6]

// const printArray = int => {
//     let array = [];
//     for (i = 1; i <= int; i++){
//         array.push(i);
//     }
//     return array;
// }
// console.log(printArray(1));
// console.log(printArray(3));
// console.log(printArray(6));

// *****************************************************


// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.


// const oyoqlariSoni = (tovuq, qoy, sigr) => tovuq * 2 + qoy * 4 + sigr * 4;


// console.log(oyoqlariSoni(5,2,8));


// ********************************************


// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// Namuna:
// and(true, false)  => false
// and(true, true)   => true
// and(false, true)  => false
// and(false, false) =>  false

// function BoolenTekshir(a, b) {
//     return a && b;
// }

// console.log(BoolenTekshir(true,true));
// console.log(BoolenTekshir(true,false));
// console.log(BoolenTekshir(false,false));
// console.log(BoolenTekshir(true,false));

// ******************************************


// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.

// const tengMi = function (a, b) {
//     return a === b;
// }
// console.log(tengMi(12,12));
// console.log(tengMi(12,"12"));
// console.log(tengMi(12,Number("12")));

// *****************************************

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi



// function futbollAchko(yut, durang, maglub) {
//     return yut * 3 + durang * 1;
// }
// console.log(futbollAchko(3, 1, 10));

// *******************************************

// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.

// const sekundga = (soat, mint) => (soat * 60 + mint) * 60;
// console.log(sekundga(1,3));



// ****************************************************


// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) =>  false
// fun(9) =>  false
// fun(7) =>  true

// function tub(son) {
//     if (son <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(son); i++){
//         if (son % i === 0) return false;
//     }
//     return true;
// }
// console.log(tub(9));
// console.log(tub(7));
// console.log(tub(1));


// *************************************

// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.

// const tengMi = (a, b) => a === b;
// console.log(tengMi(true,true));
// console.log(tengMi(false,false));
// console.log(tengMi(11,"11"));


// ***************************************

// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin.

// const booleanToString = bool => String(bool);
// console.log(booleanToString(false));
// console.log(booleanToString(true));


// *************************************


// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.
// Namuna:
// arrowFunc(3)    => 3
// arrowFunc("3")  => "3"
// arrowFunc(true) => true


// const arrowFunc = qiymat => qiymat;
// console.log(arrowFunc(0));
// console.log(arrowFunc("221"));
// console.log(arrowFunc("Hello"));
// console.log(arrowFunc(true));


// **********************************


// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin.


// const Framelar = (mint, fram) => mint * 60 * fram;
// console.log(Framelar(1,1));
// console.log(Framelar(10,1));
// console.log(Framelar(10,25));


// ****************************************

// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin


// function matematik(str) {
//     return eval(str);
// }
// console.log(matematik("10-2*2"));
// console.log(matematik("10-2-12"));
// console.log(matematik("10-2+12"));


// ************************************

// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on.

// 1-usul
// const tengm10 = function (a, b) {
//    return (a === 10 || b === 10 || a + b === 10)
// }
// console.log(tengm10(10,12));
// console.log(tengm10(3,7));
// console.log(tengm10(3,9));
// -------------
// 2-usul

// const tengMi = (a, b) => (a === 10 || b === 10 || a + b === 10) ? "Rost" : "Yolg'on";

// console.log(tengMi(10,12));
// console.log(tengMi(3,7));
// console.log(tengMi(3,9));

// ********************************************

// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin.

// const benzinQuy = function (km) {
//     return km * 10;
// }
// console.log(benzinQuy(10));
// console.log(benzinQuy(20));
// console.log(benzinQuy(23.5));


// ****************************************


// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// Namuna:
// fun(3, 7)      =>  7
// fun(-1, 0)     =>  0
// fun(1000, 400) =>  1000

// const kattaMi = (a, b) => a > b ? a : b;
// console.log(kattaMi(18,12));
// console.log(kattaMi(10,10));
// console.log(kattaMi(10,13));



// ****************************************

// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.


// function arr(a, b) {
//     return [a,b];
// }
// console.log(arr(10,12));
// console.log(arr(15,12));


// *************************************


// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir
// birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold
// yolg’on.

// const strTengmi = (str1, str2) => str1.length === str2.length;
// console.log(strTengmi("Hello","Salom"));
// console.log(strTengmi("asd","za"));


// ******************************

// 37.Shunday funksiya yasangki, unga string argument qilib
// beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi,
// aks holda false


// const boshmi = (str) => str.length === 0;
// console.log(boshmi(" "));
// console.log(boshmi(""));
// console.log(boshmi("a"));


// **********************************

// 38.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true
// qaytarsin, aks holda false.

// const bolinsin5 = a => a % 5 == 0;
// console.log(bolinsin5(10));
// console.log(bolinsin5(-55));
// console.log(bolinsin5(18));


// *********************************************

// 39.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true
// qaytarsin, aks holda false.


// const boolinsi100 = son => son % 100 == 0;
// console.log(boolinsi100(100));
// console.log(boolinsi100(1));
// console.log(boolinsi100(1000));
// console.log(boolinsi100(1234));


// *************************************

// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida
// nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.


// function strUzunlk(str) {
//     if (str === "") {
//         return 0;
//     }

//     return 1 + strUzunlk(str.slice(1));
// }

// console.log(strUzunlk("Hello"));
// console.log(strUzunlk("Hasanboy"));
// console.log(strUzunlk("Hasanboy Homidjonov"));
