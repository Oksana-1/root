const eventBus = {
  myPet: "dog",
  changeMyPet(value) {
    this.myPet = value;
  },
};

export default eventBus;
