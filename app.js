// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// function name(str) {
//     let yangi= str.split("*")
//     let teg=`<${yangi[0]}></${yangi[0]}>`
//     return teg.repeat(Number(yangi[1]))
// }
// console.log(name("div*2"));

// ==========================================================

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.

// function yigindi(son) {
//     let yigindi=0
//     for(let i=1;i<=son;i++){
//         yigindi+=i
//     }
//     return yigindi
// }

// console.log(yigindi(10));

// ===========================================================

// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

// function oraliqdami(son, obj) {
//     if(obj.min<=son && son<=obj.max){
//         return true
//     }else{
//         return false
//     }
    
// }

// console.log(oraliqdami(4, { min: 0, max: 5 }));
// console.log(oraliqdami(4, { min: 4, max: 5 }));
// console.log(oraliqdami(4, { min: 6, max: 10 }) );

// ===============================================================

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.

// function garoyib(son) {
//     let kvadrat=String(son**2)
//     if(kvadrat.endsWith(String(son))){
//         return true
//     }else{
//         return false
//     }

    
// }

// console.log(garoyib(5));
// console.log(garoyib(95));


// ============================================================

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.

// function name(arr) {
//     for (let i in arr){
//         arr[i]+=Number(i)
//     }
//     return arr
    
// }

// console.log(name([0, 0, 0, 0, 0]));
// console.log(name([1, 2, 3, 4, 5]));

// ==================================================================

// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola
// fanta


// function shakarsiz(arr) {
//     let yangi_natija = [];
//     for (let i of arr) {
//         if (i == "cola" || i == "fanta") {
            
//         } else {
//             yangi_natija.push(i);
//         }
//     }
//     return yangi_natija;
// }

// console.log(shakarsiz(["fanta", "cola", "water"]));


// ==================================================================

// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.

// function NechtaRaqam(son) {
//     let natija = 0;
//     for (let i of String(son)) {
//         natija++;
//     }
//     return natija;
// }

// console.log(NechtaRaqam(123456));

// ==================================================================

// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.

// function teskariEngKatta(son) {
//     return Number(String(son).split("").sort((a,b)=> b-a).join(""))
// }

// console.log(teskariEngKatta(123));
// console.log(teskariEngKatta(4569));

// ==================================================================

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.

// function randomSon(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomSon(5,9));

// ==================================================================

// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik
//  son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.

// function Narissistik(son) {
//     let raqamlar = String(son);
//     let uzunlik = raqamlar.length;
//     let narissistik = 0;
//     for (let i of raqamlar) {
//         narissistik += Number(i) ** uzunlik;
//     }
//     if (narissistik == son) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(Narissistik(153));

// ==============================================================

// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.

// function KattaHarf(str) {
//     let Kattaharf=0
//     for (let i of str){
//         if(i==i.toUpperCase()){
//             Kattaharf++
//         }
//     }
//     return Kattaharf
    
// }

// console.log(KattaHarf("fvLzpxmgXSDrobbgMVrc"));
// console.log(KattaHarf("JMZWCneOTFLWYwBWxyFw"));
// console.log(KattaHarf("mqeytbbjwqemcdrdsyvq"));


// ==================================================================














