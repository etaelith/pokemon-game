const array0 = [];
const array10 = [];
const array20 = [];
const array50 = [];
const array100 = [];

for (let index = 1; index <= 150; index++) {
  array100.push(index);
}
for (let index = 0; index < 10; index++) {
  array10.push(index);
}
for (let index = 0; index < 20; index++) {
  array20.push(index);
}
for (let index = 0; index < 50; index++) {
  array50.push(index);
}
console.dir(array100, { maxArrayLength: null });

/* levelDefined(array20);
levelDefined(array50);
levelDefined(array100);
 */
