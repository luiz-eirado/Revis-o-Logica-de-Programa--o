let nomeHeroi = "Musashy"
let xp = 4000
let rank = ""

if (xp < 1000) {
    rank = " Ferro"
}
else if (xp <= 2000) {
    rank = " Bronze"
}
else if (xp <= 3000) {
    rank = " Prata"
}
else if (xp <= 4000) {
    rank = " Ouro"
}
else if (xp <= 5000) {
    rank = " Platina"
}
else if (xp <= 6000) {
    rank = " Ascendente"
}
else if (xp <= 7000) {
    rank = " Imortal"
}

else {
    rank = " Sagrado"

}
console.log("O Herói de nome " + nomeHeroi + " tem " + xp + " xp" + " e está no Ranking" + rank)


