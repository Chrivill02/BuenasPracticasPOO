// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { validatePost, savePost, PostData } from "@/utils/post";

export async function POST(req: Request) {
  try {
    const data: PostData = await req.json();

    // Validar y guardar
    validatePost(data);
    await savePost(data);

    return NextResponse.json({ message: "Post guardado con éxito" });
  } catch (error) {
    console.error("Error en POST:", error);
    return NextResponse.json({ error: "Error al guardar el post" }, { status: 500 });
  }
}
