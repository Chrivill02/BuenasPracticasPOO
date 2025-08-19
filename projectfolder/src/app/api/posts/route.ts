import { NextResponse } from "next/server";
import Post from "@/utils/post";
import { getPosts, savePost } from "@/utils/postService";


export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error en GET:", error);
    return NextResponse.json({ error: "Error al obtener los posts" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const { title, description, author } = await req.json();
    const post = new Post(title, description, author);

    await savePost(post);

    return NextResponse.json({ message: "Post guardado con éxito" });
  } catch (error) {
    console.error("Error en POST:", error);
    return NextResponse.json({ error: "Error al guardar el post" }, { status: 500 });
  }
}
