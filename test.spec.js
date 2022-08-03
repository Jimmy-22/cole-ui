function sayHi(name, fn) {
  if (name === "messi") {
    fn();
  }
}

test("测试加法", () => {
  expect(1 + 2).toBe(3);
});
test("测试函数", () => {
  const fn = jest.fn();
  sayHi("messi", fn);
  expect(fn).toHaveBeenCalled();
});
