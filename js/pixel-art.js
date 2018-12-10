var mouseApretado = false;
var colorClickeado = false;
var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    colorClickeado = colorPersonalizado.value;
    $("#indicador-de-color").css("background-color", colorClickeado);
  })
);


var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

function paletaDeColores() {
  nombreColores.forEach(color => {
    agregarElemento(color);
  })
}

function agregarElemento(color) {
  var colores = document.createElement("div");
  colores.style.backgroundColor = color;
  colores.className = "color-paleta";
  paleta.appendChild(colores);
}

//         Funcion que completa la grilla de pixeles.
function completarGrillaPixeles() {
  for (n = 0; n < 1750; n++) {
    var pixel = document.createElement("div");
    pixel.className = "pixel";
    grillaPixeles.appendChild(pixel);
  }
}


//        Funcion que al elegir color, pinta el casillero de Indicador color.
function seleccionColor() {
  $('.color-paleta').click(function () {
    colorClickeado = ($(this).css("background-color"));
    $("#indicador-de-color").css("background-color", colorClickeado);
  });
}

function pintarPixel() {
  $('.pixel').click(function () {
    if (colorClickeado != false) {
      ($(this).css("background-color", colorClickeado));
    } else {
      alert("Por favor seleccione un color.")
    }
  });
  $('.pixel').hover(function () {
    if (mouseApretado == true && colorClickeado != false) {
      ($(this).css("background-color", colorClickeado));
    }
  });
}

//Detecta cuando el mouse esta apretado 

function clickOn() {
  $('body').mousedown(function () {
    mouseApretado = true;
  });
  $('body').mouseup(function () {
    mouseApretado = false;
  });
}

//Poner todos los div de grilla en blanco con una transcision

$('#borrar').on('click', (event) => {
  var $div = $('#grilla-pixeles div');
  $div.animate({
    backgroundColor: 'ffffff'
  }, 1500);
});

$(document).ready(function () {
  paletaDeColores();
  completarGrillaPixeles();
  seleccionColor();
  pintarPixel();
  clickOn();
});