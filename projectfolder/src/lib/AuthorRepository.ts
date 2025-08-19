
import Post from "@/utils/post";

export async function saveAuthor(id: string, title: string, description: string, authorName: string) {
  const author = new Post(id, title, description, authorName);
  await author.save();
}
