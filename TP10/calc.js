function addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;
}

function soustraction() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("resultat").value = c;
}

function multiplication() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("resultat").value = c;
}

function division() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;

    if (Number(b) === 0) {
        document.getElementById("resultat").value = "Impossible";
    } else {
        var c = Number(a) / Number(b);
        document.getElementById("resultat").value = c;
    }
}

function permute() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    document.getElementById("t1").value = b
    document.getElementById("t2").value = a
}

function pair()
{
	var x = document.getElementById("t1").value
	if (x % 2 ==0){
    	document.getElementById("t4").value = " Paire "
	}
	else{
    	document.getElementById("t4").value = " Impaire "
	}
}

function effacer() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("resultat").value = "";
    document.getElementById("t4").value = "";
}
