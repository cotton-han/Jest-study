# Jest

```js
test("테스트 설명", () => {
  expect("검증 대상").toXxx("기대 결과");
});
```

## Jest

### beforeEach(), afterEach()
### beforeAll(), afterAll()
  ```js
  let connection;

  beforeAll(() => {
    conection = openConnection({ host: "...", port: "..." });
  });

  afterAll(() => {
    conection.close();
  });
  ```
### only()
  ```js
  test.only("run only", () => {
  // 이 테스트 함수만 실행됨
  });

  test("not run", () => {
    // 실행 안됨
  });
  ```
### skip()
  ```js
  test.skip("skip", () => {
  // 이 테스트 함수는 제외됨
  });

  test("run", () => {
    // 실행됨
  });
  ```

## expect

- `toBe()`
  - 기본 값 비교에 적합
  - 부동소수점 숫자에는 사용 X -> toBeCloseTo 사용 권장
- `toBeCloseTo()`
- `toBeDefined()`, `toBeUndefined()`
  - expect 안에 있는 함수가 무언가를 **반환**하는지 확인할 때 사용
- `toBeTruthy()`, `toBeFalsy()`
  - `false`, `0`, `''`, `null`, `undefined`, `NaN` 제외하고는 모두 true
- `toBeGreaterThen()`, `toBeGreaterThanOrEqual()`, `toBeLessThen()`, `toBeLessThanOrEqual()`
- `toBeInstanceOf()`
- `toBeNull()`
- `toBeNaN()`
- `toContain()`, `toContainEqual()`
- `toEqual()`, `toStrictEqual()`
  - 참조 값 비교에 적합
- `toHaveLength()`
- `toHaveProperty()`
- `toMatch()`, `toMatchObject()`
- `toThrow()`
- `toHaveBeenCalled()`, `toHaveBeenCalledTimes()`, `toHaveBeenCalledWith()`, `toHaveBeenLastCalledWith()`, `toHaveBeenNthCalledWith()`
- `toHaveReturned()`, `toHaveReturnedTimes()`, `toHaveReturnedWith()`, `toHaveLastReturnedWith()`, `toHaveNthReturnedWith()`

## mock

> 코드가 의존하는 부분을 가짜(mock)로 대체하는 기법
>
> 일반적으로 코드가 의존하는 부분을 직접 생성하기가 부담스러운 경우 mocking이 많이 사용됨

### jest.fn()
  ```js
  const mockFn = jest.fn();

  mockFn();
  mockFn(1);
  mockFn("a");
  mockFn([1, 2], { a: "b" });
  //  모두 undefined를 반환
  ```
  ```js
  mockFn.mockReturnValue("I am a mock!");
  console.log(mockFn()); // I am a mock!
  ```
  ```js
  mockFn.mockResolvedValue("I will be a mock!");
  mockFn().then((result) => {
    console.log(result); // I will be a mock!
  });
  ```
  ```js
  mockFn.mockImplementation((name) => `I am ${name}!`);
  console.log(mockFn("Dale")); // I am Dale!
  ```
  ```js
  mockFn("a");
  mockFn(["b", "c"]);

  expect(mockFn).toBeCalledTimes(2);
  expect(mockFn).toBeCalledWith("a");
  expect(mockFn).toBeCalledWith(["b", "c"]);
  ```

### jest.spyOn
> 어떤 객체에 속한 함수의 구현을 가짜로 대체하지 않고, 해당 함수의 호출 여부와 어떻게 호출되었는지만을 알아내야 할 때 사용
  ```js
  const calculator = {
    add: (a, b) => a + b,
  };

  const spyFn = jest.spyOn(calculator, "add");

  const result = calculator.add(2, 3);

  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toBeCalledWith(2, 3);
  expect(result).toBe(5);
  ```

### jest.mock
  > 모듈을 mocking 해주는 역할
  >
  > 첫번째 인자로 넘어온 모듈 내의 모든 함수를 자동으로 mock 함수로 대체

### 참고
- 공식 문서
  - https://jestjs.io/docs/expect
- 블로그
  - https://www.daleseo.com/jest-basic/
