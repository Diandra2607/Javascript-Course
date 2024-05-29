var Calcdisplay = "";
function btnclick(e) {
    if (e == "AC") {
        Calcdisplay = "";
    } else {
        Calcdisplay = Calcdisplay + e;
        console.log(Calcdisplay);
        document.getElementsByID("display").value = Calcdisplay;
    }
} 