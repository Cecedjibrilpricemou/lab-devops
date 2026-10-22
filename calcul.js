// Une fonction simple à tester
export function calculerTTC(prixHT) {
  if (prixHT < 0) return 0;
  return prixHT * 1.20;
}

// FAILLE DE SÉCURITÉ : Clé secrète laissée en clair dans le code !
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE_SUPER_SECRET_KEY";
