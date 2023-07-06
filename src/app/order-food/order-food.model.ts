export class productsModel {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public images: string,
    public price: number,
    public category: string
  ) {}
}
