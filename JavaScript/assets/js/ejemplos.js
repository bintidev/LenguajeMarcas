function ciudadDiaNoche(dn) {
        var pic;
        var txt;
        if(dn == 0) {
            txt = "Esta es mi ciudad de día ;)";
            pic = "./assets/img/ciudad_dia.jpg";
        } else {
            txt = "Esta es mi ciudad de noche :D";
            pic = "./assets/img/ciudad_noche.jpg";
        }
        document.getElementById('ciudad').src = pic;
        document.getElementById('msj').innerHTML = txt;
    }