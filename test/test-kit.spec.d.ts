import { UnionToIntersection, ExpectTrue, EQUAL, ExpectFalse, NOT_EQUAL, VALID_ARGS } from '../lib';
/**
 * test kit spec
 */

/**
 * describe union to intersection
 */
export namespace UnionToIntersectionTests {
  /**
   * it should transform a union to intersection
   */
  type Check<T extends string & number> = T;
  type Test = Check<UnionToIntersection<string | number>>;
}

/**
 * describe equal
 */
export namespace EqualTests {
  /**
   * it should return true when types are equal
   */
  type normalStrings = ExpectTrue<EQUAL<string, string>>;
  type stringVsSpecificString = ExpectFalse<EQUAL<'gaga', string>>;
  type stringVsAny = ExpectFalse<EQUAL<'gaga', any>>;
  type anyVsAny = ExpectTrue<EQUAL<any, any>>;
  type sameUnion = ExpectTrue<EQUAL<'a' | 'b', 'a' | 'b'>>;
  type differentUnion = ExpectFalse<EQUAL<{ id: 'gaga' }, { id: 'gaga' | 'baga' }>>;
  type fieldWithDifferentUnion = ExpectFalse<
    EQUAL<
      | {
          id: 'a' | 'b';
        }
      | {
          id: 'a';
        },
      {
        id: 'a' | 'b';
      }
    >
  >;
  type fieldWithSameUnion = ExpectTrue<
    EQUAL<
      | {
          id: 'a' | 'b';
        }
      // eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
      | {
          id: 'a' | 'b';
        },
      {
        id: 'a' | 'b';
      }
    >
  >;
}

/**
 * describe not-equal
 */
export namespace NotEqualTests {
  /**
   * it should return false when types are equal
   */
  type normalStrings = ExpectFalse<NOT_EQUAL<string, string>>;
  type stringVsSpecificString = ExpectTrue<NOT_EQUAL<'gaga', string>>;
  type stringVsAny = ExpectTrue<NOT_EQUAL<'gaga', any>>;
  type anyVsAny = ExpectFalse<NOT_EQUAL<any, any>>;
  type sameUnion = ExpectFalse<NOT_EQUAL<'a' | 'b', 'a' | 'b'>>;
  type differentUnion = ExpectTrue<NOT_EQUAL<{ id: 'gaga' }, { id: 'gaga' | 'baga' }>>;
  type fieldWithDifferentUnion = ExpectTrue<
    NOT_EQUAL<
      | {
          id: 'a' | 'b';
        }
      | {
          id: 'a';
        },
      {
        id: 'a' | 'b';
      }
    >
  >;
  type fieldWithSameUnion = ExpectFalse<
    NOT_EQUAL<
      | {
          id: 'a' | 'b';
        }
      // eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
      | {
          id: 'a' | 'b';
        },
      {
        id: 'a' | 'b';
      }
    >
  >;
}

/**
 * describe valid-args
 */
export namespace ValidArgsTests {
  /**
   * should return true when args are valid
   */
  type aFunc = (a: string, b: number) => void;

  type normalValid = ExpectTrue<VALID_ARGS<aFunc, [string, number]>>;
  type extraVar = ExpectFalse<VALID_ARGS<aFunc, [string, number, number]>>;
  type missingVar = ExpectFalse<VALID_ARGS<aFunc, [string]>>;
  type moreSpecific = ExpectTrue<VALID_ARGS<aFunc, ['hey', 5]>>;

  /**
   *  with a function that expects a specific string
   */
  type aFuncWithSpecific = (a: 'gaga', b: number) => void;
  type lessSpecific = ExpectFalse<VALID_ARGS<aFuncWithSpecific, [string, number]>>;
  type specific = ExpectTrue<VALID_ARGS<aFuncWithSpecific, ['gaga', number]>>;
  /**
   *  with a function that expects optional parameters
   */
  type aFuncWithOptional = (a: string, b?: number) => void;
  type missingArgs = ExpectFalse<VALID_ARGS<aFuncWithOptional, []>>;
  type minimalArgs = ExpectTrue<VALID_ARGS<aFuncWithOptional, [string]>>;
  type fullArgs = ExpectTrue<VALID_ARGS<aFuncWithOptional, [string, number]>>;
  type wrongArgs = ExpectFalse<VALID_ARGS<aFuncWithOptional, [string, string]>>;
}
