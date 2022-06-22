// 1
function ucFirst(str) {
  if (!str) {
    return str;
  }
  str[0].toUpperCase();
  return str[0].toUpperCase() + str.slice(1);
}

// 2
function checkSpam(str) {
  return (
    str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
  );
}

// 3
function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0, str.length - 1) + "…";
}

// 4
function extractCurrencyValue(str) {
  return +str.slice(1);
}
