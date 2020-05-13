import { ExpectTrue, EQUAL, TupleToUnion, ReduceTupleOn } from '../lib';

/**
 * tuple utils spec
 */

/**
 * describe TupleToUnion
 */
export namespace TupleToUnionTests {
  /**
   * it should turn tuples into unions
   */
  type tupleToUnion = ExpectTrue<EQUAL<TupleToUnion<[string, number]>, string | number>>;
  type tupleToUnion2 = ExpectTrue<EQUAL<TupleToUnion<[ObjWithA, ObjWithB, ObjWithC]>, ObjWithA | ObjWithB | ObjWithC>>;
}

/**
 * describe ReduceTupleOn
 */
export namespace ReduceTupleOnTests {
  /**
   * it should turn tuples into objects
   */
  type tupleToUnion = ExpectTrue<
    EQUAL<
      ReduceTupleOn<[{ id: 'a'; api: string }, { id: 'b'; api: number }], 'id', 'api'>,
      {
        a: string;
        b: number;
      }
    >
  >;
  type tupleToUnion2 = ExpectTrue<EQUAL<TupleToUnion<[ObjWithA, ObjWithB, ObjWithC]>, ObjWithA | ObjWithB | ObjWithC>>;
}

interface ObjWithA {
  a: string;
}
interface ObjWithB {
  b: string;
}
interface ObjWithC {
  c: string;
}
interface ObjWithD {
  d: string;
}
