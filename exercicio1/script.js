function pergunteUsuario(){

const nome = (prompt(`Qual seu nome?`))
const comidaFavoritaUm = (prompt(`Qual sua comida favorita?`))
const comidaFavoritaDois = (prompt(`Qual sua comida favorita numero 2?`))
const comidaFavoritaTres = (prompt(`Qual sua comida favorita numero 3?`))
const mensagem = `Estas são as tres comidas favoritas de: ${nome} \n -${comidaFavoritaUm}\n -${comidaFavoritaDois}\n -${comidaFavoritaTres}`
console.log(mensagem)
}

pergunteUsuario ()