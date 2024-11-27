var foo, bar, baz;

foo = "sedang " + "Belajar " + "JavaScript";
console.log(foo);

foo = "Blejar " + "EMCAScript " + 7;
console.log(foo);

foo = "Selamat ";
bar = "Malam ";
baz = "Indonesia";
var hasil = foo + bar + baz;
console.log(hasil);

var siswa = ["Andri", "Joko", "Sukma", "Rina", "Sari"];

foo = `${siswa[1]} mendapat penghargaan sebagai siswa teladan`;
console.log(foo);

bar = `${siswa[3]} dan ${siswa[4]} adalah teman akrab`;
console.log(bar);

baz = `Dalam ujian kemaren ${siswa[0]} mendapat nilai ` + 4 * 20;
console.log(baz);

foo = 10 + 10 + 9;
console.log(foo);

foo = "10" + 10 + 9;
console.log(foo);

foo = 10 + "10" + 9;
console.log(foo);

foo = 10 + 10 + "9";
console.log(foo);
