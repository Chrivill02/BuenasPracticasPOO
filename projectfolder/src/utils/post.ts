
import sql from "@/lib/db";
import PostTitle from "./postTitle";
import PostDescription from "./postDescription";
import PostAuthor from "./postAuthor";

export default class Post {
  public title: PostTitle;
  public description: PostDescription;
  public author: PostAuthor;

  constructor(title: string, description: string, author: string) {
    this.title = new PostTitle(title);
    this.description = new PostDescription(description);
    this.author = new PostAuthor(author);
  }

  async save() {
    try {
      await sql`
        INSERT INTO AutorTable (title, description, author)
        VALUES (${this.title.value}, ${this.description.value}, ${this.author.value});
      `;
    } catch (error) {
      console.error("Error real al guardar el post:", error);
      throw error;
    }
  }
}
