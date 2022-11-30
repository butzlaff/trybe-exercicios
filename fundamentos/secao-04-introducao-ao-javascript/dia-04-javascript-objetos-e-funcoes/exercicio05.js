function Personagens(personagem, origem, nota, recorrente){
    this.personagem = personagem;
    this.origem = origem;
    this.nota = nota;
    this.recorrente = recorrente;
  }
  
  let margarida = new Personagens('Margarida', 'Pato Donald', 'Namorada do personagem principal nos quadrinhos do Pato Donald', 'Sim')
  
  let tioPatinhas = new Personagens('Tio Patinhas', 'Christmas on Bear Mountain, Dell’s Four Color Comics #178', 'O último MacPatinhas', 'Sim')
  
  for (let key in margarida){
    if(margarida[key] === tioPatinhas[key]){
        console.log('Ambos decorrentes')
    }else{
    console.log(margarida[key] + ' e ' + tioPatinhas[key])
}  
}


  console.table(margarida)

  console.table(tioPatinhas)