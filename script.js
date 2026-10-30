/* 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
songachabo’lgansonlaryig’indisiniqaytarsin. */
console.log('<< 101 >>');

function namuna(son) {
  let counter = 0;
  for (let i = 0; i <= son; i++) {
    counter += i;
  }
  return counter; 
}

console.log(namuna(3));
console.log(namuna(10));
console.log(namuna(7));

/* 102.Funskiyasonvaobjectqabulqiladi.Objectniichidaminva
maxdeganpropertilarmavjud.Agarushbusonminvamaxni
oralig’idabo’lsafunksiyatrueqaytarsin,aksholdafalse */
console.log('<< 102 >>');

const Namuna = (son, object) => son >= object.min && son <= object.max;

console.log(Namuna(4, { min: 0, max: 5}));
console.log(Namuna(4, { min: 4, max: 5}));
console.log(Namuna(4, { min: 6, max: 5}));
console.log(Namuna(5, { min: 5, max: 5}));

/* 103.Funksiyasonqabulqiladi, agarushbusonnikvadratga
ko’tarsak,ushbunatijaningoxirigiqiymatisonningo’zigateng
bo’lsafunksiyatrueqaytarsin,aksholdafalse. */
console.log('<< 103 >>');

function Namuna2(son) {
  const num = String(son ** 2);
  const lastTwo = num.slice(num.length - String(son).length);
  return lastTwo === String(son) ? true : false;
}

console.log(Namuna2(1));
console.log(Namuna2(3));
console.log(Namuna2(6));
console.log(Namuna2(95));

/* 104.Funksiyamassivqabulqiladi. Funksiyamassivningele
mentlarigao’shaelementningindexiniqo’shganholdayangi
massivqaytarsin. */
console.log('<< 104 >>');

const Namuna3 = arr => arr.map((item, index) => item + index);

console.log(Namuna3([0, 0, 0, 0, 0]));
console.log(Namuna3([1, 2, 3, 4, 5]));
console.log(Namuna3([5, 4, 3, 2, 1]));

/* 105.Funksiya ichimliklarmassiviniqabul qiladi. Funksiya
ichidashakariyo’qichimlilariniginaqaytarishikerak. */
console.log('<< 105 >>');

function Namuna4(arr) {
  const shakarliIchimliklar = ['cola', 'fanta'];
  return arr.filter(drink => !shakarliIchimliklar.includes(drink));
}

console.log(Namuna4(["fanta", "cola", "water"]));
console.log(Namuna4(["fanta", "cola"]));
console.log(Namuna4(["lemonade", "beer", "water"]));

/* 106.Funksiyasonqabulqilsa,Funksiyaushbusondanechta
raqamborliginiqaytarsin. */
console.log('<< 106 >>');

const Namuna5 = num => String(num).length;

console.log(Namuna5(123));
console.log(Namuna5(56));
console.log(Namuna5(7154));
console.log(Namuna5(61217311514));
console.log(Namuna5(0));

/* 107.Funksiyasonqabuqilsa,ushbufunksiyasonningraqamlari
o’rniistalganchaalmashtiribengkattahosilbo’lishimumkin
bo’lgansonniqaytarsin. */
console.log('<< 107 >>');

const Namuna6 = son => Number(String(son).split('').sort((a, b) => b - a).join(''));

console.log(Namuna6(123));
console.log(Namuna6("001"));
console.log(Namuna6(999));
console.log(Namuna6(784));

/* 108.Funksiya2tasonlaroralig’iniqabulqiladi.Funksiyaushbu
oraliqdanbirontarandomsonqaytarsin. */
console.log('<< 108 >>');

const Namuna7 = (son1, son2) => Math.floor(Math.random() * (son2 - son1 + 1)) + son1;

console.log(Namuna7(5, 9));
console.log(Namuna7(5, 9));
console.log(Namuna7(5, 9));

/* 109.Funksiyasonqabulqiladi.Ushbufunksiyaushbusonnaris
sistiksonbo’lsatrueqaytarsin,aksholdafalse.Narissistikson
deganisonningharbirraqaminisonninguzunligimiqdorida
darajagako’taribqo’shibchiqilgandao’zigatengbo’lganson. */
console.log('<< 109 >>');

function Namuna8(son) {
  const sonList = String(son).split('');
  let result = 0;
  sonList.forEach(item => {
    result += Number(item) ** String(son).length;
  });
  
  return result === son ? true : false;
}

console.log(Namuna8(153));
console.log(Namuna8(370));
console.log(Namuna8(1652));

/* 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
nechtakattaharfishtiroketganinqaytarsin. */
console.log('<< 110 >>');

const Namuna9 = str => {
  let counter = 0;
  for (char of str) {
    char === char.toUpperCase() && counter++;
  }
  return counter;
}

console.log(Namuna9("fvLzpxmgXSDrobbgMVrc"));
console.log(Namuna9("JMZWCneOTFLWYwBWxyFw"));