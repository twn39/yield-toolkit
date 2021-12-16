export function helper (plop) {
  plop.setHelper('eq', function (value, text) {
    return value === text;
  });
}
