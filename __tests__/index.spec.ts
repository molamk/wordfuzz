import { sum } from "../src/index";

test("should return correct sum", () => {
  const received = sum(1, 2, 3, 4);
  expect(received).toBe(10);
});
