/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const firstExcuse = [
    "Eres increíble",
    "Tienes un valor inmenso",
    "Eres digna de amor",
    "Tu fuerza es admirable",
    "Eres única y especial",
    "Tienes el poder de lograr lo que te propones",
    "Eres capaz de enfrentar cualquier desafío",
    "Tu sonrisa ilumina el mundo",
    "Eres un ejemplo de valentía",
    "Tu presencia es una inspiración",
    "Eres fuerte y resiliente",
    "Tu belleza es auténtica",
    "Eres un ser maravilloso",
    "Tienes un corazón lleno de bondad",
    "Eres valiosa tal como eres",
    "Tienes un impacto positivo en quienes te rodean",
    "Eres capaz de grandes cosas",
    "Tu confianza es admirable",
    "Eres digna de éxito y felicidad",
    "Tu energía es contagiosa",
    "Eres una persona increíblemente especial",
    "Tu pasión es inspiradora",
    "Eres una fuente de amor y alegría",
    "Tienes una luz interior que brilla",
    "Eres un tesoro único",
    "Tu carácter es ejemplar",
    "Eres una mujer formidable",
    "Tu inteligencia es impresionante",
    "Eres un pilar de fuerza",
    "Tu corazón es generoso",
    "Eres una inspiración constante",
    "Tu determinación es inquebrantable",
    "Eres un faro de esperanza",
    "Tu risa es un regalo",
    "Eres una mujer de gran valor",
    "Tu creatividad es sorprendente",
    "Eres digna de todas las bendiciones",
    "Tu autenticidad es hermosa",
    "Eres una fuerza de la naturaleza",
    "Tu amor propio es admirable",
    "Eres valiente y capaz",
    "Tu alegría es contagiosa",
    "Eres una persona ejemplar",
    "Tu presencia es un regalo para el mundo",
    "Eres un ser maravilloso y único",
    "Tu valor no tiene límites",
    "Eres una mujer excepcional",
    "Tu vida está llena de posibilidades",
    "Eres una luz en la oscuridad",
    "Tu espíritu es inquebrantable",
    "Eres una fuente de sabiduría",
    "Tu bondad es infinita"
  ];
  const secondExcuse = [
    "y sigues brillando con tu luz",
    "y estás logrando cosas maravillosas",
    "y tus sueños están al alcance",
    "y siempre encuentras fuerza en ti misma",
    "y cada día te vuelves más fuerte",
    "y cada paso que das es un avance hacia tus metas",
    "y tu valor crece cada día",
    "y continúas inspirando a quienes te rodean",
    "y tus logros son prueba de tu dedicación",
    "y tu coraje es un ejemplo para todos",
    "y tu fuerza interior es admirable",
    "y te conviertes en una mejor versión de ti misma",
    "y tu confianza se refleja en todo lo que haces",
    "y tus esfuerzos siempre dan frutos",
    "y tu determinación nunca se detiene",
    "y tu amor propio crece con cada día",
    "y tu capacidad para enfrentar retos es impresionante",
    "y tu sonrisa ilumina el camino",
    "y sigues construyendo un futuro brillante",
    "y cada día es una nueva oportunidad para brillar",
    "y cada desafío te hace más fuerte",
    "y tu dedicación es inspiradora",
    "y siempre encuentras razones para ser feliz",
    "y cada momento es una victoria personal",
    "y sigues superando tus propias expectativas",
    "y tu capacidad para amar es infinita",
    "y tu alegría es contagiosa",
    "y sigues avanzando con confianza",
    "y tu vida está llena de éxitos",
    "y cada acción que tomas te acerca a tus sueños",
    "y tu amor propio crece cada día más",
    "y cada logro es una prueba de tu talento",
    "y tu energía positiva transforma el entorno",
    "y continúas siendo un faro de esperanza",
    "y tus logros reflejan tu dedicación",
    "y tu fuerza interior te impulsa hacia adelante",
    "y cada paso es una afirmación de tu grandeza",
    "y sigues construyendo un legado de amor",
    "y tu perseverancia es ejemplar",
    "y cada día te sorprendes a ti misma",
    "y tu vida está llena de momentos hermosos",
    "y sigues brillando con autenticidad",
    "y cada acción demuestra tu valor",
    "y cada momento es una oportunidad para ser feliz",
    "y sigues avanzando con valentía",
    "y tu presencia es un regalo para el mundo",
    "y cada desafío es una oportunidad para crecer",
    "y sigues creando belleza en el mundo",
    "y cada día es una celebración de tu ser"
  ];
  const thirdExcuse = [
    "con amor",
    "con confianza",
    "con determinación",
    "con valentía",
    "con alegría",
    "con esperanza",
    "con fortaleza",
    "con orgullo",
    "con gratitud",
    "con paz",
    "con serenidad",
    "con entusiasmo",
    "con sabiduría",
    "con generosidad",
    "con coraje",
    "con paciencia",
    "con pasión",
    "con tranquilidad",
    "con dedicación",
    "con fe",
    "con claridad",
    "con equilibrio",
    "con ternura",
    "con confianza en ti misma",
    "con amor propio",
    "con grandeza",
    "con valor",
    "con determinación inquebrantable",
    "con fuerza interior",
    "con admiración",
    "con inspiración",
    "con optimismo",
    "con propósito",
    "con generosidad de espíritu",
    "con empoderamiento",
    "con resiliencia",
    "con calma",
    "con energía positiva",
    "con luminosidad",
    "con deseo",
    "con capacidad",
    "con perseverancia",
    "con confianza absoluta",
    "con humildad",
    "con alegría desbordante",
    "con amor infinito",
    "con valentía pura",
    "con enfoque",
    "con determinación firme",
    "con cariño"
  ];
  const fourthExcuse = [
    "y has superado cada obstáculo",
    "y te has enfrentado a tus miedos",
    "y has conquistado tus sueños",
    "y has vencido cada desafío",
    "y has transformado tu vida",
    "y has aprendido de cada experiencia",
    "y has crecido con cada reto",
    "y has superado tus límites",
    "y has encontrado tu camino",
    "y has logrado tus metas",
    "y has construido tu propia historia",
    "y has triunfado sobre las dificultades",
    "y has demostrado tu fortaleza",
    "y has alcanzado tus objetivos",
    "y has evolucionado cada día",
    "y has hecho realidad tus aspiraciones",
    "y has dejado atrás lo que te limita",
    "y has superado tus expectativas",
    "y has transformado tus sueños en realidad",
    "y has enfrentado con valentía tus retos",
    "y has encontrado fuerza en tu interior",
    "y has demostrado tu capacidad para triunfar",
    "y has alcanzado nuevas alturas",
    "y has convertido los desafíos en oportunidades",
    "y has transformado los obstáculos en pasos hacia adelante",
    "y has creado tu propio éxito",
    "y has enfrentado cada dificultad con gracia",
    "y has vencido los desafíos con determinación",
    "y has convertido los problemas en soluciones",
    "y has demostrado tu resiliencia",
    "y has encontrado soluciones a cada reto",
    "y has superado tus propios miedos",
    "y has conquistado tus metas personales",
    "y has hecho frente a cada desafío",
    "y has transformado tus esfuerzos en logros",
    "y has vencido cada barrera",
    "y has creado un camino lleno de éxitos",
    "y has enfrentado los desafíos con coraje",
    "y has encontrado la fuerza para seguir adelante",
    "y has construido un futuro brillante",
    "y has superado los obstáculos con sabiduría",
    "y has logrado lo que te propusiste",
    "y has convertido los retos en victorias",
    "y has transformado tu vida para mejor",
    "y has encontrado tu verdadera fuerza",
    "y has hecho realidad tus sueños más grandes",
    "y has demostrado tu capacidad para superar cualquier cosa"
  ];

  const randomFunction = array => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const random = () => {
    const firstExcuseRandom = randomFunction(firstExcuse);
    const secondExcuseRandom = randomFunction(secondExcuse);
    const thirdExcuseRandom = randomFunction(thirdExcuse);
    const fourthExcuseRandom = randomFunction(fourthExcuse);

    return `${firstExcuseRandom} ${secondExcuseRandom} ${thirdExcuseRandom} ${fourthExcuseRandom}`;
  };
  document.getElementById("enlaceAGenerator").onclick = function() {
    document.getElementById("generator").value = random();
  };
  document.getElementById("enlaceAGenerator2").onclick = function() {
    document.getElementById("generator").value = random();
  };
  document.getElementById("enlaceAGenerator3").onclick = function() {
    document.getElementById("generator").value = random();
  };
};
