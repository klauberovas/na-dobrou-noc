const ovciJmena = [
  'Bětuška',
  'Cína',
  'Dolly',
  'Heidy',
  'Líza',
  'Belinda',
  'Celia',
  'Elvíra',
  'Karla',
  'Otýlie',
  'Škraboška',
  'Kopretinka',
  'Berta',
  'Růženka',
  'Bobinka',
  'Žofka',
  'Dášenka',
  'Vlnka',
  'Květuše',
  'Pampeliška',
];
ovciJmena.forEach((prvek, index) => {
  if (index < 10) {
    index += 1;
    document.body.innerHTML += `<p>Ovečka ${prvek} jako ${index} přeskočila přes plot.</p>`;
  }
});
