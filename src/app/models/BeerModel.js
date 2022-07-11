function BeerModel(id, name, type, note) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.note = Number(note)
}

module.exports = BeerModel;