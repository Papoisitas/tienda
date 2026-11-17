function comprar() {

    let cantidad1 = document.getElementById("cantidad1").value;
    let cantidad2 = document.getElementById("cantidad2").value;
    let cantidad3 = document.getElementById("cantidad3").value;
    let cantidad4 = document.getElementById("cantidad4").value;
    let cantidad5 = document.getElementById("cantidad5").value;
    let cantidad6 = document.getElementById("cantidad6").value;

    let total = (cantidad1 * 250) +
                (cantidad2 * 450) +
                (cantidad3 * 180) +
                (cantidad4 * 220) +
                (cantidad5 * 380) +
                (cantidad6 * 320);

    document.getElementById("total").innerHTML = "TOTAL A PAGAR: $" + total;

}