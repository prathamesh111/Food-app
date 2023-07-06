export class IngredientModel {
  constructor(
    public ingName: string,
    public ingAmt: number,
    public ingredType?: string,
    public expiryDate?: Date,
    public freshness?: string
  ) {}
}
