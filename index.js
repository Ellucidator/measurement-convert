var metros = parseFloat(prompt("Informe o valor em metros:"));
const unidade_de_medida = prompt(
  "Informe a unidade de medida:\n" +
    "- milímetros(mm)\n" +
    "- centímetros(cm)\n" +
    "- decímetros(dm)\n" +
    "- decâmetro(dam)\n" +
    "- hectômetro(hm)\n" +
    "- quilômetro(km)"
);

switch (unidade_de_medida) {
  case "mm":
    var resultado = metros * 1000;
    alert("Resultado: " + metros + "m = " + resultado + "mm");
    break;
  case "cm":
    var resultado = metros * 100;
    alert("Resultado: " + metros + "m = " + resultado + "cm");
    break;
  case "dm":
    var resultado = metros * 10;
    alert("Resultado: " + metros + "m = " + resultado + "dm");
    break;
  case "dam":
    var resultado = metros / 10;
    alert("Resultado: " + metros + "m = " + resultado + "dam");
    break;
  case "hm":
    var resultado = metros / 100;
    alert("Resultado: " + metros + "m= " + resultado + "hm");
    break;
  case "km":
    var resultado = metros / 1000;
    alert("Resultado: " + metros + "m= " + resultado + "km");
    break;
  default:
    alert("Opção invalida.");
}
