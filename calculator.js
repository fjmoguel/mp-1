function addition() {
    let first = document.getElementById("num1").value;
    first = Number(first);

    let second = document.getElementById("num2").value;
    second = Number(second);

    let result = first + second;

    if (result < 0) {
        document.getElementById("output").innerHTML = `<p style="color: red;">${result}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
    }
}

function subtraction() {
    let first = document.getElementById("num1").value;
    first = Number(first);

    let second = document.getElementById("num2").value;
    second = Number(second);

    let result = first - second;

    if (result < 0) {
        document.getElementById("output").innerHTML = `<p style="color: red;">${result}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
    }
}

function multiplication() {
    let first = document.getElementById("num1").value;
    first = Number(first);

    let second = document.getElementById("num2").value;
    second = Number(second);

    let result = first * second;

    if (result < 0) {
        document.getElementById("output").innerHTML = `<p style="color: red;">${result}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
    }
}

function division() {
    let first = document.getElementById("num1").value;
    first = Number(first);

    let second = document.getElementById("num2").value;
    second = Number(second);

    let result = first / second;

    if (result < 0) {
        document.getElementById("output").innerHTML = `<p style="color: red;">${result}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
    }
}

function power() {
    let first = document.getElementById("num1").value;
    first = Number(first);

    let second = document.getElementById("num2").value;
    second = Number(second);

    let result = 1;

    for (let i = 0; i < second; i++) {
        result *= first;
    }

    if (result < 0) {
        document.getElementById("output").innerHTML = `<p style="color: red;">${result}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
    }
}

function clearCalc() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("output").innerHTML = "";
}
