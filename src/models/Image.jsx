class Image {
  constructor(
    idImage,
    name,
    source,
    creationDate,
    modificationDate,
    game,
    typeImage
  ) {
    this.idImage = idImage;
    this.name = name;
    this.source = source;
    this.creationDate = creationDate;
    this.modificationDate = modificationDate;
    this.game = game;
    this.typeImage = typeImage;
  }
}

export default Image;
