import sql from "@/lib/db"; 
import Post from "./post";

export async function savePost(post: Post) {
  try {
    await sql`
      INSERT INTO AutorTable (title, description, author)
      VALUES (${post.title.value}, ${post.description.value}, ${post.author.value});
    `;
  } catch (error) {
    console.error("Error al guardar el post:", error);
    throw error;
  }
}
