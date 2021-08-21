import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { UserProfileComponent } from './componets/user-profile/user-profile.component';
import { TabsComponent } from './componets/tabs/tabs.component';
import { EventCardComponent } from './componets/event-card/event-card.component';
import { PostCommentsComponent } from './componets/post-comments/post-comments.component';
import { VideoListComponent } from './componets/video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TabsComponent,
    EventCardComponent,
    PostCommentsComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
