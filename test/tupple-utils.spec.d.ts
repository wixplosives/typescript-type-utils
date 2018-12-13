import { ExpectTrue, EQUAL, TuppleToUnion, ReduceTuppleOn } from "../lib";

/**
 * tupple utils spec
 */

/**
 * describe TuppleToUnion
 */
export namespace TuppleToUnionTests {
    /**
     * it should turn tupples into unions
     */
    type tuppleToUnion = ExpectTrue<
        EQUAL<TuppleToUnion<[string, number]>, string | number>
        >
    type tuppleToUnion2 = ExpectTrue<
        EQUAL<TuppleToUnion<[ObjWithA, ObjWithB, ObjWithC]>, ObjWithA | ObjWithB | ObjWithC>
        >
}

/**
 * describe ReduceTuppleOn
 */
export namespace ReduceTuppleOnTests {
    /**
     * it should turn tupples into objects
     */
    type tuppleToUnion = ExpectTrue<
        EQUAL<ReduceTuppleOn<[{ id: 'a', api: string }, { id: 'b', api: number }], 'id', 'api'>, {
            a: string,
            b: number
        }>
        >
    type tuppleToUnion2 = ExpectTrue<
        EQUAL<TuppleToUnion<[ObjWithA, ObjWithB, ObjWithC]>, ObjWithA | ObjWithB | ObjWithC>
        >
}


interface ObjWithA {
    a: string
}
interface ObjWithB {
    b: string
}
interface ObjWithC {
    c: string
}
interface ObjWithD {
    d: string
}
