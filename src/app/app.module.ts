import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';




import { CommentsComponent } from './components/comments/comments.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import {CommentComponent} from "./components/comment/comment.component";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            {path: '', redirectTo: 'users', pathMatch: 'full'},
            {
                path: 'users', component: UsersComponent,
                children: [
                    {path: ':id', component: UserDetailsComponent}
                ]
            },
            {
                path: 'posts', component: PostsComponent,
                children: [
                    {path: ':id', component: PostDetailsComponent}
                ]
            },
            {
                path: 'comments', component: CommentsComponent,
                children: [
                    {path: ':id', component: CommentDetailsComponent}
                ]
            }
        ]
    }
]

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UsersComponent,
        UserDetailsComponent,
        PostComponent,
        PostsComponent,
        PostDetailsComponent,
        CommentComponent,
        CommentsComponent,
        CommentDetailsComponent,
        CommentComponent,
        MainLayoutComponent,
        HeaderComponent,

    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
