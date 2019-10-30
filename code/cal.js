function add(request, response) {
  let { a, b } = request.qs;
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
}
function sub(request, response) {
  let { m, n } = request.qs;
  m = parseInt(m);
  n = parseInt(n);
  return m - n;
}
function mul(request, response) {
  let { x, y } = request.qs;
  x = parseInt(x);
  y = parseInt(y);

  console.log(x, y);
  return x * y;
}
function div(request, response) {
  let { x, y } = request.qs;
  x = parseInt(x);
  y = parseInt(y);
  return x / y;
}

exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
