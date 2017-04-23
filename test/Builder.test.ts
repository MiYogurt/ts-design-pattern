import test from 'ava';

import { Meal, MealBuilder, ChickenBurger, VegBurger, Coke, Pepsi } from '../src/Builder';

test('MealBuilder get a Meal', (t) => {
    let mlb = new MealBuilder();
    let m1 = mlb.prepareVegMeal();
    let m2 = mlb.prepareNotVegMeal();
    t.true(m1 instanceof Meal);
    t.true(m2 instanceof Meal);

    t.is(m1.getCost(), (new VegBurger().price())+(new Coke().price()));
    t.is(m2.getCost(), (new ChickenBurger().price())+(new Pepsi().price()))
});