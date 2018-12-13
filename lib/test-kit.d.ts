export type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export type EXTENDS<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false

export type EQUAL<VALUE extends EXPECTED, EXPECTED> = NOT_EQUAL<VALUE, EXPECTED> extends false ? true : false

export type NOT_EQUAL_INTERNAL<VALUE, EXPECTED> = UnionToIntersection<VALUE> extends UnionToIntersection<EXPECTED> ?
    UnionToIntersection<EXPECTED> extends UnionToIntersection<VALUE> ?
            false : true : true

export type NOT_EQUAL<VALUE, EXPECTED> = true extends NOT_EQUAL_INTERNAL<VALUE, EXPECTED> ? true : false

export type VALID_ARGS<FUNC extends (...args: any[]) => any, ARGS extends any[]> =
    ARGS extends Parameters<FUNC> ? true : false

export type ExpectTrue<T extends true> = T
export type ExpectFalse<T extends false> = T