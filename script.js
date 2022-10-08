var count = 0;

var integerZero = 0;
var stringZero = '0';
var booleanVariable = false;
var cat = {
    feet: 4,
    eyes: 2,
    name: 'Mingming',
};


function showMyHtmlDocument() {
    document.body.getElementsByTagName('div')[0].innerHTML = "HTML is Shown";
}

function showMyCat() {
    var message = `My Cat's name is ${cat.name}`;
    document.getElementById('cat-name').innerHTML = message;
}

function isZeroEqual() {
    const isZero = integerZero == stringZero;
    alert(`Integer Zero is equals to String Zero: ${isZero}`);
}

function sayHello() {
    alert('Hello its my first Javascript code');
}

function addCount() {
    count++;
    document.getElementsByClassName('count')[0].innerHTML = count;
}