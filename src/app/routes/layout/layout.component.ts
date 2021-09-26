import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserProfileService } from 'src/app/services/interceptors/user-profile.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private userProfileService: UserProfileService, private http: HttpClient) { }

  ngOnInit(): void {
    let uuid: any = localStorage.getItem('uuid');

   this.http.get(`https://uopwsawvoaqbggzcfxip.supabase.co/rest/v1/profiles?uuid=eq.${uuid}`)
   .toPromise().then((data: any) => {
       console.log(data);
   })
  
   
  }

}
