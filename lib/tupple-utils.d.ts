export type TuppleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never

export type ReduceTuppleOn<
    T extends any[],
    FIELD extends keyof TuppleToUnion<T>,
    EXTRACTFIELD extends keyof TuppleToUnion<T>
> = {
    [key in TuppleToUnion<T>[FIELD]]: Extract<TuppleToUnion<T>, { [exc in FIELD]: key }>[EXTRACTFIELD]
}
