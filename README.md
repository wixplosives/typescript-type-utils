# typescript-type-utils

This repo contains usefull typescript types, to be used across projects.

## types
### test-kit
the test kit types are utility types for ensuring the API signature of your code.

| types        | description           |
| ------------- |-------------|
| `ExpectTrue<T>`     | fails the build if "T" is not true |
| `ExpectFalse<T>`    | fails the build if "T" is not false  |
| `Equal<T1, T2>`    | equal to true if "T1" is identical to "T2"  |
| `NotEqual<T1, T2>`    | equal to true if "T1" is not identical to "T2"  |
| `VALID_ARGS<FUNC, ARGS_TUPPLE>`    | equal to true if "FUNC" can accept "ARGS_TUPPLE"   |


example usage:  
```ts
    type normalStrings = ExpectTrue<
        EQUAL<string, string>
    >
```
### tuple-utils
utility types for manipulating tuple types

| types        | description           |
| ------------- |-------------|
| `TupleToUnion<T>`     | equal to a union of the items in the tuple |
| `ReduceTupleOn<T, ID_FIELD, VALUE_FIELD>`    | reduces the tuple to an object  |


## contribution
* no actual code files are allowed, only d.ts file
* the types are separated according to usage context and can be found in the lib directory
* all types must be tested, see examples in the test directory