function checkNumberInRange(num: number) {
  if (
    (num >= 8 && num <= 11) ||
    (num >= 14 && num <= 17) ||
    (num >= 20 && num <= 23) ||
    (num >= 26 && num <= 29)
  ) {
    return true;
  } else {
    return false;
  }
}

export default checkNumberInRange;
