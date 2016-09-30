    /*
      TypeWritter effect Javascript 
      By Rodrigo Jarouche
      http://rodrigojarouche.blogspot.com
      Based on http://pt.stackoverflow.com/users/129/sergio
      http://pt.stackoverflow.com/questions/64021/texto-que-se-digita-aos-poucos/155874#155874
    */

    function typeWriter(texto,idElemento,tempo){
        var char = texto.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            document.getElementById(idElemento).innerHTML += next;
        }, tempo);
    }
