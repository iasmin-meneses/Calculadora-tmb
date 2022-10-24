function calculate(){
    var genero = document.getElementById("genero").value
    var taxa = document.getElementById("taxa").value
    var  peso = document.getElementById("peso").value
    var  altura = document.getElementById("altura").value
    var  idade = document.getElementById("idade").value
    
    if (genero !== '' && taxa !== '' && peso !== '' && altura !== '' && idade !== ''){
   
    if (taxa == "sedentario" && genero == "masculino"){
        var tmb = 1.2 * (66 + (13.7 * peso) + (5 * altura)- (6.8 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb);
    }else if(taxa == "sedentario" && genero == "feminino"){
        var tmb = 1.2 * ( 655 + (9.6 * peso ) + (1.8 * altura ) - (4.7 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb);
    }else if(taxa == "levemente ativo" && genero == "masculino"){
        var tmb =  1.375 * ( 66 + (13.7 * peso ) + (5 * altura ) - (6.8 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb);
    }else if(taxa == "levemente ativo" && genero == "feminino"){
        var tmb = 1.375 * ( 655 + (9.6 * peso ) + (1.8 * altura ) - (4.7 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb);
    }else if(taxa == "moderadamente ativo" && genero == "masculino"){
        var tmb = 1.55 * (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb);
    }else if(taxa == "moderadamente ativo" && genero == "feminino"){
        var tmb = 1.55 * (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb);
    }else if(taxa == "altamente ativo" && genero == "masculino"){
        var tmb = 1.725 * (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb);
    }else if(taxa == "altamente ativo" && genero == "feminino"){  
        var tmb = 1.725 * (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb);
    }else if(taxa == "extremamente ativo" && genero == "masculino"){ 
        var tmb = 1.9 * (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb);
    }else if(taxa == "extremamente ativo" && genero == "feminino"){
        var tmb = 1.9 * (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));
        console.log("Sua taxa metabólica basal é de:" + tmb)}

    var resultado = document.getElementById("text-area"). innerHTML = "Sua taxa metabólica basal estimada é de : " + Math.round(tmb) + "Kcal";

}else{
    alert("Preencha todos os campos!")
}
    }
    