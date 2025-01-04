import { Component, OnInit } from '@angular/core';
import { ArticleSummary } from 'src/app/Modeles/articlesummary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: ArticleSummary[] = [];
  isShowDetailedPost:boolean =false;
  selectedPostId:string = '';

  constructor(  ) { }
  ngOnInit(): void {
    const newArticle = new ArticleSummary();
    newArticle.id = '1';
    newArticle.title = 'New Article Title';
    newArticle.content = 'There is a clickable image with beautiful hover effect and active title link for each post item. Left side is a sticky menu bar. Right side is a blog content that will scroll up and down.';
    newArticle.isnew = true;
    newArticle.createdDateTime = new Date();
    newArticle.genre = 'Travel';
    newArticle.noOfComments = 10;
    newArticle.defaltImageUrl ='../../../../assets/img/sample.jpg'
    this.articles.push(newArticle);
    this.articles.push(newArticle);
    this.articles.push(newArticle);
    this.articles.push(newArticle);
   };

   showDetailedPost(postId:string){
  this.isShowDetailedPost = true;
  this.selectedPostId = postId;
   }
}
