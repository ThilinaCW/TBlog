import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Blog_home/home/home.component';
import { BlogPostComponent } from './Components/Blog_home/blog-post/blog-post.component';
import { FooterComponent } from './Components/Blog_home/Footer/footer/footer.component';
import { LoginComponent } from './Components/Adminpanel/Login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './Components/Adminpanel/Dashboard/add-post/add-post.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }  // wildcard route for 404
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogPostComponent,
    FooterComponent,
    LoginComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxEditorModule,
    BrowserAnimationsModule,  
    MatButtonModule,        
    MatInputModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
