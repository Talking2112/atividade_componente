import React from 'react'

function Componente02() {
  let nome = "Buggy"
  let nome2 = "Luffy"
  let nome3 = 'Buggy e Luffy'
  const red_line = {
    nome:"Shanks",
    idade:47,
    profissao:"Pirata",
    hobby:"Caçar tesouros"
  }
    return (
    <div>
        <h1>One piece</h1>
        <p>
            No mundo de one piece existe muitos piratas poderosos, como {nome}, {nome2} e {red_line.nome}, todos são {red_line.profissao}.            
        </p>
    </div>
  )
}

export default Componente02