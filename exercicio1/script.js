const variavel = Number(prompt("Digite um número para descobrir se é divisivel por 2 ou 3"))

 if (variavel %2 === 0){
    console.log("É divisivel por 2")
    if (variavel %3 === 0)
    console.log("É divisivel por 3")}
     

else if (variavel %3 === 0){ console.log("Esse número não é divisivel por 2 mas é por 3")}
else console.log("Não é divisivel por 2 e por 3")
  
/* 
if (variavel %2 ===0 || variavel %3 ===0){
    console.log("É divisivel por 2 ou por 3")
}else console.log("Não é divisivel por 2 ou 3") */