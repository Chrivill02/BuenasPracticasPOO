import { NextResponse } from "next/server";
import { updatePost, deletePost } from "@/utils/postService";
import Post from "@/utils/post";


export async function PUT(req: Request, context: { params: { id: string } }) {
  try {
    const { title, description, author } = await req.json();

    
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

export async function DELETE(req: Request, context: { params: { id: string } }) {
  try {
    const deleted = await deletePost(Number(context.params.id));

    if (!deleted) {
      return NextResponse.json({ error: "Post no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ message: "Post eliminado con éxito" });
  } catch (error) {
    console.error("Error en DELETE:", error);
    return NextResponse.json({ error: "Error al eliminar el post" }, { status: 500 });
  }
}
