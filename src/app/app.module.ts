import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { MemberService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SelectedMemberComponent } from './family/selected-member/selected-member.component';
import { ListMemebersComponent } from './family/list-memebers/list-memebers.component';
import { SearchInListComponent } from './search-in-list/search-in-list.component';
import { FamilyComponComponent } from './family/family.component';
import { FrendComponComponent } from './frend-compon/frend-compon.component';
import { listFrendssComponent } from './frend-compon/list-frends/list-frends.component';
import { SlectFrendsComponent } from './frend-compon/slect-frends/slect-frends.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const ROUTS = [
  { path: 'family', component: FamilyComponComponent },
  { path: 'frend', component: FrendComponComponent },
  { path: '**', redirectTo: 'family', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    SelectedMemberComponent,
    ListMemebersComponent,
    SearchInListComponent,
    FamilyComponComponent,
    FrendComponComponent,
    listFrendssComponent,
    SlectFrendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTS),
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
