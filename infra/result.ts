export class Result<T> {
    Qtd: number = 0;
    Page: number = 1;
    Total: number = 0;
    Data: T[] = [];
}