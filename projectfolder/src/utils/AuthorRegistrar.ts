/*
// utils/userRegistrar.ts
import sql from "@/lib/db";
import Post from "./post.ts";

export default class UserRegistrar {
  constructor() {}

  public async run(email: string, firstName: string, lastName: string) {
    const post = new Post(email, firstName, lastName);
    this.isValidEmail(email);
    await this.saveUserEmail(email, firstName, lastName);
  }

  private isValidEmail(email: unknown): void {
    if (typeof email !== "string") {
      throw new Error("Email must be a string");
    }
    if (!email.includes("@")) {
      throw new Error("Invalid email format");
    }
  }

  private async saveUserEmail(
    email: string,
    firstName: string,
    lastName: string
  ): Promise<void> {
    try {
      await sql`
        INSERT INTO public.users (email, first_name, last_name)
        VALUES (${email}, ${firstName}, ${lastName});
      `;
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
      throw new Error("Error al guardar el usuario");
    }
  }
}
*/