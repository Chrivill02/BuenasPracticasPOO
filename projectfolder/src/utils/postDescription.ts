
export default class PostDescription {
  public value: string;

  constructor(value: string) {
    this.validate(value);
    this.value = value;
  }

  private validate(value: string) {
    if (value.length < 5) {
      throw new Error("La descripción es demasiado corta");
    }
  }
}
