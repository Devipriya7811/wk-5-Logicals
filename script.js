
// one
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }
var result;
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero.";
        return;
        }
        result = num1 / num2;
        break;
        default:
        document.getElementById("result").innerText = "Invalid operator. Please use +, -, *, or /.";
        return;
        }
    document.getElementById("result").innerText = "Result: " + result;
}

// Two
const quotes = ["U come and code then you will speak"];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

document.getElementById("generateBtn").addEventListener("click", generateQuote);
generateQuote();

// Three

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const errorElement = document.getElementById("error");

    if (name === "") {
        errorElement.textContent = "Name cannot be empty.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorElement.textContent = "Invalid email format.";
        return;
    }
    errorElement.textContent = "";

    console.log("Name: ", name);
    console.log("Email: ", email);
}

// six

const imageSlider = document.getElementById("image-slider");
const prevSlide = document.getElementById("pre-slide");
const nextSlide = document.getElementById("pre-slide");

const images = ['img/f.jpg','img/n.jpg','img/s.jpg'];
let currentIndex = 0;
prevSlide.addEventListener ('click',() => {
    currentIndex = (currentIndex + 1 +images.length) % images.length;
    updateImage ();
});
nextSlide.addEventListener ('click',() => {
    currentIndex = (currentIndex + 1 ) % images.length;
    updateImage ();
});

function updateImage (){
    const img = gallery.querySelector('#current-image')
    img.classList.add('fade-out');
    setTimeout(() =>{
        img.src = images[currentIndex];
        img.alt = images[currentIndex];
        img.classList.remove('fade-out');
    },500)
}

// seven
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
    }
};
function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

// nine

function changeContent() {
    const rowIndex = parseInt(document.getElementById("rowIndex").value);
    const colIndex = parseInt(document.getElementById("colIndex").value);
    const newContent = document.getElementById("newContent").value;

    const table = document.getElementById("myTable");
    const rows = table.getElementsByTagName("tr");

    if (rowIndex >= 0 && rowIndex < rows.length) {
    const cells = rows[rowIndex].getElementsByTagName("td");
    if (colIndex >= 0 && colIndex < cells.length) {
        cells[colIndex].innerText = newContent;
    } else {
        alert("Invalid column index.");
    }
    } else {
    alert("Invalid row index.");
    }
}

// Ten

function parameterizeString(inputString, separator = '-') {
    const trimmedString = inputString.trim();
    const parameterizedString = trimmedString
    .replace(/[^\w\s]/g, '') 
    .replace(/\s+/g, separator);
    return parameterizedString.toLowerCase();
}

const inputString = "Robin Singh from USA.";
const parameterOutput = arameterizeString(inputString);
console.log(parameterOutput);


