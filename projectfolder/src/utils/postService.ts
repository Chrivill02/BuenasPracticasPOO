import sql from "@/lib/db";
import Post from "./post";


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


export async function getPosts() {
  try {
    const result = await sql`SELECT * FROM AutorTable`;
    return result;
  } catch (error) {
    console.error("Error al obtener posts:", error);
    throw error;
  }
}


export async function updatePost(id: number, post: Post) {
  const result = await sql`
    UPDATE AutorTable
    SET
      title = ${post.title.value},
      description = ${post.description.value},
      author = ${post.author.value}
    WHERE id = ${id}
    RETURNING *;
  `;
  return result[0] ?? null;
}



export async function deletePost(id: number) {
  try {
    const result = await sql`
      DELETE FROM AutorTable
      WHERE id = ${id}
      RETURNING *;
    `;

    return result[0] ?? null;
  } catch (error) {
    console.error("Error al eliminar post:", error);
    throw error;
  }
}
