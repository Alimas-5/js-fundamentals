/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

function tailleString(text1) {
  return text1.length ;
}

function remplaceCar(text1, text2, text3) {
  return text1 = text1.replace(text2, text3);
}

function concatString(text1, text2){
  return text1 = text1 + text2;
}

function afficherCar(text1, nbr){
  return text1[nbr-1];
}

function afficherNCar(text1, nbr){
  return text1.substr(0, 9);
}

function majusculeString(text1){
  return text1.toUpperCase()
}

function SupprEspaceString(text1){
  return text1.trim();
}

function IsString(text1){
  return text1.includes(text1);
}

function AfficherExtensionString(extension) {
      if (extension!="")
    {
      nbchar = extension.length;
      extensions = extension.substring(nbchar-3,nbchar); 
      return extensions; 
    }
   }

function NombreEspaceString(element) {
  text1 = element.split(' ').length - 1;
  return text1;
}

function InverseString (texte) {
  return texte.split("").reverse().join("");
}

function minusculeString (texte) {
  return texte.toLowerCase();
}

function countDistinctCar (texte) {
  
}