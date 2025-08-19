
export default class Post {
  id: string;
  title: string;
  description: string;
  author: string;

  constructor(id: string, title: string, description: string, author: string) {
    if (id.length < 1) throw new Error("Id inválido");
    if (title.length < 3) throw new Error("El título debe tener al menos 3 caracteres");
    if (description.length < 5) throw new Error("La descripción es demasiado corta");
    if (author.length < 1) throw new Error("Autor inválido");

    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
  }
}
