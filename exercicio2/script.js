let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch (nacionalidade){
    case "brasileira":
        console.log("Você é de nacionalidade brasileira")
        break

    case "argentina":
        console.log("Você é de nacionalidade argentina")
        break
    
    case "uruguaia":
        console.log("Você é de nacionalidade uruguaia")
        break

    case "chilena":
        console.log("Você é de nacionalidade chilena")
        break

    case "colombiana":
        console.log("Você é de nacionalidade colombiana")
    default:
    console.log("Nacionalidade não encontrada")
}

/* if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}
 */
