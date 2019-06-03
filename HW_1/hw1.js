var memory = prompt('Memory', '128');
var colour = prompt('Colour', 'black')
var price;
var isFind = false;
var img;


var phone_data = [
    [16, "gold", 130],
    [16, "black", 120],
    [32, "gold", 170],
    [32, "black", 165],
    [32, "silver", 175],
    [64, "black", 280],
    [128, "gold", 450],
    [128, "black", 400],
    [128, "white", 480],
    [256, "white", 750],
    [256, "silver", 720],
]


var i = 0;
try {
    if (phone_data.length < 1) throw "Ошибка поиска товара!";
    while (i < phone_data.length ) {

        if ( (phone_data[i][0] === +memory) && (phone_data[i][1] === colour.toLocaleLowerCase())) {
            console.log('Phone finded!');
            console.log(i+':');
            console.log(phone_data[i][0]);
            console.log(phone_data[i][1]);
            console.log(phone_data[i][2]);
            price = phone_data[i][2];
            url_image = './img/' + colour.toLocaleLowerCase() + '.png';
            isFind = true;
        }
        i++;
    }

    if (isFind) {
        var image = new Image();
        var image_def = new Image();
        image.src = url_image; 
        image_def.src = './img/default.png';

        image.onload = function(){document.body.appendChild(image)};
        image.onerror = function(){document.body.appendChild(image_def)};

        document.write('<h5>'+colour+ ' colour</h5>');
        document.write('<h2>Price: '+price+ '$</h2>');
    }
    else {
        document.write('<h1 style="color: red">Телефон с такими характеристиками не найден!</h1>');
    }
}
catch (err) {
    document.write('<h1 style="color: red">Введены некорректные данные!</h1>');
}