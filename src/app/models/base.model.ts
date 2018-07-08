export interface Identifiable {
  getId(): string
}

export abstract class AbstractItem<T> implements Identifiable {
  protected id: string

  abstract toJSON(): any
  abstract fromJSON(json: any): T

  getId(): string {
    return this.id
  }
}
