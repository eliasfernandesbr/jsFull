function speakGeneric() {
  console.log(this.sound);
}

let dog = {
  sound: "Au Au",
  speak: speakGeneric,
};

let cat = {
  sound: "Miau",
  speak: speakGeneric,
};

dog.speak(); //quando o dog fala o this será Auau
cat.speak(); // quando o gato fala o this será Miau

