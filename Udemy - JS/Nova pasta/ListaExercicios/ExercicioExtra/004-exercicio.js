//Escreve uma funcao que dado um total de anos de estudo
//retorna o quão experiente o usuario é:

function AnosDeEstudo(anos){
    if(anos < 1){
        return 'Iniciante'
    }
    else if(anos > 1 && anos < 3){
        return 'Intermediário'
    }
    else if(anos > 3 && anos < 6){
        return 'Avançado'
    }
    else if(anos >= 7){
        return 'Jedi Master'
    }
}

var Experiencia = 7
console.log(AnosDeEstudo(Experiencia))