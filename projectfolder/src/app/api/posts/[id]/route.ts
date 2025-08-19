import { NextResponse } from "next/server";
import { updatePost } from "@/utils/postService";
import Post from "@/utils/post";

// PUT -> actualizar un post
export async function PUT(req: Request, context: { params: { id: string } }) {
  try {
    const { title, description, author } = await req.json();

    // Reconstruimos el Post con Value Objects
    const post = new Post(title, description, author);

    const updatedPost = await updatePost(Number(context.params.id), post);

    if (!updatedPost) {
      return NextResponse.json({ error: "Post no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ message: "Post actualizado con éxito" });
  } catch (error) {
    console.error("Error en PUT:", error);
    return NextResponse.json({ error: "Error al actualizar el post" }, { status: 500 });
  }
}