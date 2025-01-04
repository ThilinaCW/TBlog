export class ArticleSummary {
    id!: string;
    title:string = '';
    content:string = '';
    isnew:boolean = false;
    createdDateTime:Date | undefined;
    genre:string = '';
    createdBy: string | undefined;
    noOfComments: number = 0;
    defaltImageUrl:string = '';
}
