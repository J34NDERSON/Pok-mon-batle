let pikachuHP = 100;
let charmanderHP = 100;

function attack(move) {
  const damage = Math.floor(Math.random() * 20) + 5; // dano entre 5 e 25
  if (move === 'Thunderbolt' || move === 'Quick Attack' || move === 'Iron Tail' || move === 'Electro Ball') {
    // Pikachu ataca
    charmanderHP -= damage;
    if (charmanderHP < 0) charmanderHP = 0;
    alert(`⚡ Pikachu usou ${move}! Charmander perdeu ${damage} de HP!`);
  } else {
    // Charmander ataca (se quiser mais pra frente)
    pikachuHP -= damage;
    if (pikachuHP < 0) pikachuHP = 0;
    alert(`🔥 Charmander usou ${move}! Pikachu perdeu ${damage} de HP!`);
  }
  updateHP();
}

function updateHP() {
  // Corrigido: primeiro é o Charmander (cima), depois Pikachu (baixo)
  document.querySelector('.rival-hp .hp-fill').style.width = charmanderHP + '%';
  document.querySelector('.player-hp .hp-fill').style.width = pikachuHP + '%';

  if (pikachuHP <= 0) {
    alert('🔥 Charmander venceu!');
  } else if (charmanderHP <= 0) {
    alert('⚡ Pikachu venceu!');
  }
}