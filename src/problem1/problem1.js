var sum_to_n_a = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
};

var sum_to_n_b = function (n) {
  let sum = 0;

  for (let i = n; i > 0; i--) {
    sum = sum + i;
  }

  return sum;
};

var sum_to_n_c = function (n) {
  function recursion(count , sum) {
    if (count > n) return sum;
    sum = sum + count;
    count++;
    return recursion(count, sum);
  };

  return recursion(1, 0);
};
