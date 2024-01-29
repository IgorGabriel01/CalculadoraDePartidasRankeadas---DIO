function calcularPartidasRankeadas(vitorias, derrotas){
    let saldoRanqueadas = (vitorias - derrotas);
    let elo;

    if(saldoRanqueadas <= 10){
        elo = "Ferro";
    } else if (saldoRanqueadas > 10 && saldoRanqueadas <= 20){
        elo = "Bronze";
    } else if (saldoRanqueadas > 20 && saldoRanqueadas <= 50){
        elo = "Prata";
    } else if (saldoRanqueadas > 50 && saldoRanqueadas <= 80){
        elo = "Ouro";
    } else if (saldoRanqueadas > 80 && saldoRanqueadas <= 90){
        elo = "Diamante";
    } else if (saldoRanqueadas > 90 && saldoRanqueadas <= 100){
        elo = "Lendário";
    } else if (saldoRanqueadas > 100){
        elo = "Imortal";
    }

    console.log(`O Herói tem saldo de ${saldoRanqueadas} está no nível de ${elo}`);
}


calcularPartidasRankeadas(35, 20);
