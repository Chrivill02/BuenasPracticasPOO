// utils/post.ts
import sql from "@/lib/db";

export interface PostData {
  title: string;
  description: string;
  author: string;
}

// Función de validación
export function validatePost(data: PostData) {
  const { title, description, author } = data;
  if (title.length < 3) throw new Error("El título debe tener al menos 3 caracteres");
  if (description.length < 5) throw new Error("La descripción es demasiado corta");
  if (author.length < 1) throw new Error("Autor inválido");
}

// Función para guardar en la DB
export async function savePost(data: PostData) {
  const { title, description, author } = data;
  try {
    await sql`
      INSERT INTO AutorTable (title, description, author)
      VALUES (${title}, ${description}, ${author});
    `;
  } catch (error) {
    console.error("Error real al guardar el post:", error);
    throw error;
  }
}
