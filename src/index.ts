export default function isValidEIN(rawEin: string | number): boolean {
  if (!rawEin) {
    return false;
  }

  const rawString = rawEin.toString();

  // reject any letters
  if (/[a-z]/i.test(rawString)) {
    return false;
  }

  // strip non-digit characters
  const ein = rawString.replace(/\D/g, '');

  // EIN must be 9 digits
  if (ein.length !== 9) {
    return false;
  }

  // disallow all zeros and invalid prefix
  if (ein === '000000000' || ein.startsWith('00')) {
    return false;
  }

  return true;
}
