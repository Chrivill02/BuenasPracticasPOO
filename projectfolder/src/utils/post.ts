// utils/post.ts
import sql from "@/lib/db";

export default class Post {
  title: string;
  description: string;
  author: string;

  constructor(title: string, description: string, author: string) {
    if (title.length < 3) throw new Error("El título debe tener al menos 3 caracteres");
    if (description.length < 5) throw new Error("La descripción es demasiado corta");
    if (author.length < 1) throw new Error("Autor inválido");

    this.title = title;
    this.description = description;
    this.author = author;
  }

  async save() {
    try {
        await sql`
        INSERT INTO autortable (title, description, author)
        VALUES (${this.title}, ${this.description}, ${this.author});
        `;
    } catch (error) {
        console.error("Error real al guardar el post:", error);
        throw error; // <-- relanza el error real para que tu route.ts lo vea
    }
  }
}
