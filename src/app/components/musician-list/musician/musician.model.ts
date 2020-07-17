export class Musician {
  public id: number;
  public name: string;
  public genre: Array<string>;
  public location: string
  public description: string;
  public imagePath: string;

  constructor(id: number, name: string, genre: Array<string>, location: string, desc: string, imagePath: string) {
    this.id = id;
    this.name = name.toUpperCase();
    this.genre = genre;
    this.location = location;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
