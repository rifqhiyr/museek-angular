export class Musician {
  public name: string;
  public genre: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, genre: string, desc: string, imagePath: string) {
    this.name = name.toUpperCase();
    this.genre = genre.toUpperCase();
    this.description = desc;
    this.imagePath = imagePath;
  }
}
