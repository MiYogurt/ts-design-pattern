import test from 'ava';

import { Singleton1, Singleton2, Singleton3 } from '../src/Singleton';

test("test Singleton1",(t) => {
    let instance1 = Singleton1.getInstance();
    let instance2 = Singleton1.getInstance();
    t.is(instance1 instanceof Singleton1, true);
    t.is(instance1 === instance2, true);
});

test("test Singleton2",(t) => {
    let instance1 = Singleton2.getInstance();
    let instance2 = Singleton2.getInstance();
    t.is(instance1 instanceof Singleton2, true);
    t.is(instance1 === instance2, true);
});

test("test Singleton3",(t) => {
    let instance1 = Singleton3.getInstance();
    let instance2 = Singleton3.getInstance();
    t.is(instance1 instanceof Singleton3, true);
    t.is(instance1 === instance2, true);
});