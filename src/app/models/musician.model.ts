export class Musician {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public name: string,
    public price: number,
    public gender: string,
    public address: string,
    public city: string,
    public country: string,
    public description: string,
    public genre: Array<string>,
    public imgPath: string
  ) { }
}
