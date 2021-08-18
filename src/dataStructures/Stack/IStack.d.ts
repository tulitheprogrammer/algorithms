export interface IStack<T> {
  push(data): void;

  pop(): T | null;

  size: number;

  print(): void;
}