export default class PostAuthor {
  public readonly value: string;

  constructor(value: string) {
    if (value.length < 1) throw new Error("Autor inválido");
    this.value = value;
  }
}
