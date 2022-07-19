import { Sum } from "../src/Sum";
import { Multiply } from "../src/Multiply";

test('addition', () => {
  expect(Sum.sumTwoNumber(1,2)).toBe(3);
});

test('multiplication', () => {
  expect(Multiply.multiplyTwoNum(1,2)).toBe(2);
});
