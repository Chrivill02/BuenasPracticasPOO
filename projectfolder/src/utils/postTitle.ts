export default class PostTitle {
  public readonly value: string;

  constructor(value: string) {
    if (value.length < 3) throw new Error("El título debe tener al menos 3 caracteres");
    this.value = value;
  }
}
