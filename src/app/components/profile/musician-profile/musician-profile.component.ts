import { Component, OnInit, Input } from '@angular/core';
import { Musician } from 'src/app/models/musician.model';
import { MusicianService } from 'src/app/services/musician.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-musician-profile',
  templateUrl: './musician-profile.component.html',
  styleUrls: ['./musician-profile.component.css'],
})
export class MusicianProfileComponent implements OnInit {
  inputDisplay = false;
  @Input() musicianProfiles: Musician[] = [];
  @Input() id: number;

  musicianForm: FormGroup;

  constructor(private musicianService: MusicianService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.musicianProfiles = this.musicianService.getMusicians();
      this.initForm()
    })
  }


  onCancel() {
    this, this.router.navigate(['../'], { relativeTo: this.route })
  }

  // onDelete(index: number) {
  //   (<FormArray>this.musicianForm.get('musicians')).removeAt(index);
  // }

  onEdit() {
    this.inputDisplay = !this.inputDisplay;
    this.router.navigate(['edit'], { relativeTo: this.route })
    // this.musicianService.updateMusician(this.id, this.musicianProfiles)
  }
  // still not working
  onSave() {
    this.inputDisplay = true;
    if (this.inputDisplay) {
      this.musicianService.updateMusician(this.id, this.musicianForm.value)
    } else {
      this.onCancel()
    }

  }

  private initForm() {
    let name = '';
    let imgPath = '';
    let email = '';
    let password = '';
    let price = null;
    let gender = '';
    let address = '';
    let city = '';
    let country = '';
    let genre = [];
    let description = '';

    if (this.inputDisplay) {
      const musician = this.musicianService.getMusician(this.id);
      name = musician.name;
      imgPath = musician.imgPath;
      email = musician.email;
      password = musician.password;
      price = musician.price;
      gender = musician.gender;
      address = musician.address;
      city = musician.city;
      country = musician.country;
      description = musician.description;
      genre = musician.genre;
      description = musician.description;
    }
    this.musicianForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imgPath': new FormControl(imgPath, Validators.required),
      'email': new FormControl(email, Validators.required),
      'password': new FormControl(password, Validators.required),
      'price': new FormControl(price, Validators.required),
      'gender': new FormControl(gender, Validators.required),
      'address': new FormControl(address, Validators.required),
      'city': new FormControl(city, Validators.required),
      'country': new FormControl(country, Validators.required),
      'genre': new FormControl(genre, Validators.required),
      'description': new FormControl(description, Validators.required),
    })
  }
}
