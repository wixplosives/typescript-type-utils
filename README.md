# typescript-type-utils

[![Build Status](https://github.com/wixplosives/typescript-type-utils/workflows/tests/badge.svg)](https://github.com/wixplosives/typescript-type-utils/actions)

Useful TypeScript types for usage across projects.

## Included Types

### test-kit

The test-kit types are utility types for ensuring the API signature of your code.

| Type                            | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| `ExpectTrue<T>`                 | fails the build if "T" is not true               |
| `ExpectFalse<T>`                | fails the build if "T" is not false              |
| `Equal<T1, T2>`                 | equal to true if "T1" is identical to "T2"       |
| `NotEqual<T1, T2>`              | equal to true if "T1" is not identical to "T2"   |
| `VALID_ARGS<FUNC, ARGS_TUPPLE>` | equal to true if "FUNC" can accept "ARGS_TUPPLE" |

Example usage:

```ts
type normalStrings = ExpectTrue<EQUAL<string, string>>;
```

### tuple-utils

Utility types for manipulating tuple types

| Type                                      | Description                                |
| ----------------------------------------- | ------------------------------------------ |
| `TupleToUnion<T>`                         | equal to a union of the items in the tuple |
| `ReduceTupleOn<T, ID_FIELD, VALUE_FIELD>` | reduces the tuple to an object             |

## Contribution

- No actual code files are allowed, only `.d.ts` files.
- The types are separated according to usage context and can be found in the `lib` directory.
- All types must be tested, see examples in the `test` directory.

## License

MIT
