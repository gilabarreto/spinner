setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 2000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 2500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 3000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 3500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 4000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 4500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 5000);