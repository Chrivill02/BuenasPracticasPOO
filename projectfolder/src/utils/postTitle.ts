
export default class PostTitle {
  public value: string;

  constructor(value: string) {
    this.validate(value);
    this.value = value;
  }

  private validate(value: string) {
    if (value.length < 3) {
      throw new Error("El título debe tener al menos 3 caracteres");
    }
  }
}
