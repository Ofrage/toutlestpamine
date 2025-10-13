function calcul_moyenne() {
    var n1 = prompt("donner la première note:");
    var n2 = prompt("Donner la deuxième note:");
    var n3 = prompt("donner la troisième note");
    
    var somme = Number(n1) + Number(n2) + Number(n3);
    
    document.write("Voici la somme :" + somme + "<br>");
    var moyenne = somme/3;
    
    document.write("Voici la moyenne:" + moyenne + "<br>");
    
    if (moyenne < 10) {
    document.write("Redoublant");
    }
    else if (moyenne < 12) {
    document.write("Admis Passable");
    }

else if (moyenne < 14) {
    document.write("Admis Bien");

}

else {
    document.write("Admis Très bien");

}    
document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');
    }


    function test_temperature() {
        var n1 = prompt("donner la température:");
    
        if ( n1 < 10){
            document.write("Froid");
        }
else if ( n1 < 25) {
    document.write("Normal");
}

else {
    document.write("Chaud");
}
document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');

    }


function comparaison() {
    var n1 = prompt("Saisir un nombre");
    var n2 = prompt("Saisir un nombre");

    if (n1 < n2) {
        document.write(n2 + " " + "est supérieure" + "<br>");
        document.write(n1 + " " + "est inférieure" + "<br>");
    }

else if (n1 > n2) {
    document.write(n1 + " " + "est supérieure" + "<br>");
    document.write(n2 + " " + "est inférieure" + "<br>");

}
else {
    document.write("les deux nombres sont égaux" + "<br>");


}
document.write('<a href="index.html">Retourner à l\'index</a>');

}