import PostTitle from "./postTitle";
import PostDescription from "./postDescription";
import PostAuthor from "./postAuthor";

export default class Post {
  public readonly title: PostTitle;
  public readonly description: PostDescription;
  public readonly author: PostAuthor;

  constructor(title: string, description: string, author: string) {
    this.title = new PostTitle(title);
    this.description = new PostDescription(description);
    this.author = new PostAuthor(author);
  }
}
