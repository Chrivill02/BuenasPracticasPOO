
import { NextResponse } from "next/server";
import Post from "@/utils/post";

export async function POST(req: Request) {
  try {
    const {title, description, author } = await req.json();

    // Crear instancia de Post y guardar
    const post = new Post( title, description, author);
    await post.save();

    return NextResponse.json({ message: "Post guardado con éxito" });
  } catch (error) {
    console.error("Error en POST:", error);
    return NextResponse.json({ error: "Error al guardar el post" }, { status: 500 });
  }
}
