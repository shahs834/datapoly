const element = document.getElementById('machine');
const machine = new SlotMachine(element, {
  active: 1,
  delay: 1000,
  spins: 5,
  randomize() {
    return this.random;
  }
});
machine.shuffle();