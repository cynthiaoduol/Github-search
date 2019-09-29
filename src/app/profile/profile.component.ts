import { ProfileService } from './../profile-service/profile.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
private profile:any[];

  constructor(private profileService:ProfileService) {
    this.profileService.getInfo().subscribe(profile =>{
      console.log(profile);
      this.profile=profile;
    }); 
   }

  ngOnInit() {
  }

}
