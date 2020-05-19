//Equacao do Segundo Grau

function EquacaoSegundo(ax2, bx, c){
    let resultado =[]
    let delta = (bx**2) - (4*ax2*c)
    if(delta < 0){
        return 'Delta negativo'
    }
    let x1 = (- bx + Math.sqrt(delta))/2*ax2
    let x2 = (- bx - Math.sqrt(delta))/2*ax2
    resultado.push(x1)
    resultado.push(x2)
    return resultado
}

console.log(EquacaoSegundo(3,-5,12))
console.log(EquacaoSegundo(3,1,2))