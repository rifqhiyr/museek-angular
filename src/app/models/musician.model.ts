import { Booking } from './booking.model';

export class Musician {
  public email: string;
  public password: string;
  public name: string;
  public price: number;
  public gender: string;
  public address: string;
  public city: string;
  public country: string;
  public description: string;
  public genre: Array<string>;
  public imgPath: string;
  public bookings: Booking[];

  constructor(email: string,
    password: string,
    name: string,
    price: number,
    gender: string,
    address: string,
    city: string,
    country: string,
    description: string,
    genre: Array<string>,
    imgPath: string,
    bookings: Booking[],

  ) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.price = price;
    this.gender = gender;
    this.address = address;
    this.city = city;
    this.country = country;
    this.description = description;
    this.genre = genre;
    this.imgPath = imgPath;
    this.bookings = bookings;
  }
}

