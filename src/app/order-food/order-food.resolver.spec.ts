import { TestBed } from '@angular/core/testing';

import { OrderFoodResolver } from './order-food.resolver';

describe('OrderFoodResolver', () => {
  let resolver: OrderFoodResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OrderFoodResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
