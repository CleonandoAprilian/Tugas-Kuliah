var foo;

foo = true && false;
console.log(foo);

foo = true || false;
console.log(foo);

foo = !false;
console.log(foo);
foo = true || (true && false);
console.log(foo);
foo = (true && false) || true;
console.log(foo);
foo = true || false || true;
console.log(foo);
foo = true && false && true;
console.log(foo);
foo = "Duniailkom" || "JavaScript";
console.log(foo);
foo = "Duniailkom" && "JavaScript";
console.log(foo);
foo = true || "JavaScript";
console.log(foo);
foo = false || "JavaScript";
console.log(foo);
foo = "JavaScript" && false;
console.log(foo);
foo = false && "JavaScript";
console.log(foo);
foo = false || (false && true) || "JavaScript";
console.log(foo);
foo = true || (false && true) || "JavaScript";
console.log(foo);
