export default class PostDescription {
  public readonly value: string;

  constructor(value: string) {
    if (value.length < 5) throw new Error("La descripción es demasiado corta");
    this.value = value;
  }
}
