import React from 'react'
let b = "buggy"
let l = "luffy"
let buggyluffy = `${l} e ${b}`
const one_piece = {
    localização: "red line",
    rei_dos_piratas: "luffy",
    palhaco: "buggy",
    buggy_imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5OfIM3KAEXKDMS-nhLKy8rUiYmPOFH4GoA&s"
}

const componente2 = () => {
  return (
    <div>
        <h1>No mundo de one piece, dois dos maiores piratas do mundo são {buggyluffy}.</h1>
        <h2>Na {one_piece.localização}, {one_piece.palhaco} tem diversas batalhas com {one_piece.rei_dos_piratas}, mais eles são bem amigos.</h2>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5OfIM3KAEXKDMS-nhLKy8rUiYmPOFH4GoA&s'/>
    </div>
  )
}

export default componente2