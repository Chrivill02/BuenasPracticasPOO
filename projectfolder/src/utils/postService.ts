import sql from "@/lib/db";
import Post from "./post";

// Crear un post en la BD
export async function savePost(post: Post) {
  try {
    await sql`
      INSERT INTO AutorTable (title, description, author)
      VALUES (${post.title.value}, ${post.description.value}, ${post.author.value});
    `;
  } catch (error) {
    console.error("Error al guardar post:", error);
    throw error;
  }
}

// Obtener todos los posts
export async function getPosts() {
  try {
    const result = await sql`SELECT * FROM AutorTable`;
    return result;
  } catch (error) {
    console.error("Error al obtener posts:", error);
    throw error;
  }
}

// Actualizar un post por ID
export async function updatePost(
  id: number,
  data: { title?: string; description?: string; author?: string }
) {
  try {
    const result = await sql`
      UPDATE AutorTable
      SET 
        title = COALESCE(${data.title}, title),
        description = COALESCE(${data.description}, description),
        author = COALESCE(${data.author}, author)
      WHERE id = ${id}
      RETURNING *;
    `;

    return result[0] ?? null; // Si no encuentra, retorna null
  } catch (error) {
    console.error("Error al actualizar post:", error);
    throw error;
  }
}

// Eliminar un post por ID
export async function deletePost(id: number) {
  try {
    const result = await sql`
      DELETE FROM AutorTable
      WHERE id = ${id}
      RETURNING *;
    `;

    return result[0] ?? null; // Si no encuentra, retorna null
  } catch (error) {
    console.error("Error al eliminar post:", error);
    throw error;
  }
}
