// Une fonction simple à tester
export function calculerTTC(prixHT) {
  if (prixHT < 0) return 0;
  return prixHT * 1.20;
}
