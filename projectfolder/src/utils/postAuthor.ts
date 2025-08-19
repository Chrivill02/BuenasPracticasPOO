
export default class PostAuthor {
  public value: string;

  constructor(value: string) {
    this.validate(value);
    this.value = value;
  }

  private validate(value: string) {
    if (value.length < 1) {
      throw new Error("Autor inválido");
    }
  }
}
