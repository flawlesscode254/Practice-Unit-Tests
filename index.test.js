const sum = require("./sum");

test("Expect a sum of 5", () => {
  expect(sum(2, 3)).toBe(5);
});

test("Expect a different answer", () => {
  expect(sum(3, 4)).not.toBe(8);
});

test("Expect a greater sum", () => {
  expect(sum(4, 8)).toBeGreaterThanOrEqual(12);
});

test("Expect similar object", () => {
  let data = {
    one: 1,
  };
  data["two"] = 2;
  expect(data).toEqual({
    one: 1,
    two: 2,
  });
});

test("Expect it to be true", () => {
  let reply = true;
  expect(reply).toBeTruthy();
});

test("Expect a match", () => {
    expect('Jumpers').toMatch(/rs/)
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

test("Should have milk", () => {
    expect(shoppingList).toContain("milk")
})