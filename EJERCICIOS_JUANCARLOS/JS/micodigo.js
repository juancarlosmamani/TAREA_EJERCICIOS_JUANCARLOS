function saludar(){
    const nombre=[];
    nombre [0]=prompt("cual es tu nombre");
    nombre [1]=prompt("cual es tu apellido");
    nombre [2]=prompt("cual es tu edad");
    document.getElementById("datos").innerHTML=nombre[0]+" "+nombre[1]+" "+nombre[2]+" "+nombre[3];
}
function pares (){
    const par=[];
    let n= prompt("CUANTOS NUMEROS PARES DESEA ADQUIRIR");
    for(let i=1;i <= n;i++){
        par[i-1]=i*2;
        console.log(par[i]);
    }
    let tam=par.length
    texto = "<ul>";
    for(let j = 0;j<tam;j++){
        texto=texto+"<li>"+ par[j]+"</li>";
    }
    texto =texto+"</ul>";
    document.getElementById("res").innerHTML=texto;

}
function impares (){
    const impar=[];
    let n= prompt("CUANTOS NUMEROS IMPARES DESEA ADQUIRIR");
    for(let i=0;i<n;i++){
        impar[i]=(2*i)+1;
        console.log(impar[i]);
    }
    let tam=impar.length
    texto = "<ul>";
    for(let j = 0;j<tam;j++){
        texto=texto+"<li>"+ impar[j]+"</li>";
    }
    texto =texto+"</ul>";
    document.getElementById("resultado").innerHTML=texto;

}
function multiplosdecinco(){
    const mult = [];
    let n = prompt("¿CUANTOS NUMEROS MULTIPLOS DE 5 DESEA ADQUIRIR?");
    for (let i = 1; i<=n; i++){
        mult[i]=(i*5);
        console.log(mult[i]);
    }

    let tama = mult.length
    texto = "<ul>";
    for(let k = 1; k < tama; k++){
        texto = texto+"<li>"+mult[k]+"</li>";
    }

    texto = texto+"<ul>";
    document.getElementById("r").innerHTML=texto;
}

function numaleatorio(){
    const aleatorio = [];
    let n = prompt("generar n numeros aleatorios entre 10-100");   
        for(let i = 0;i < n; i++){
            var a = Math.floor(Math.random()*90)+10;
            aleatorio[i] = a;
            console.log(aleatorio[i])
    
    }
    let tam = aleatorio.length
    texto = "<ul>";
    for(let c = 0;c < tam;c++){
        texto = texto+"<li>"+aleatorio[c]+"</li>";
    }

    texto = texto+"<ol>";
    document.getElementById("respu").innerHTML=texto;
}
function multiplosdetres(){
    const multiplos = [];
    let n = prompt("CUANTOS MULTIPLOS DE 3 DESEA ADQUIRIR");
    for (let j = 1; j<=n; j++){
        multiplos[j]=j*3;
        console.log(multiplos[j]);
    }

    let tam = multiplos.length
    texto = "<ul>";
    for(let m = 1; m < tam; m++){
        texto = texto+"<li>"+multiplos[m]+"</li>";
    }

    texto = texto+"<ul>";
    document.getElementById("p").innerHTML=texto;
}
