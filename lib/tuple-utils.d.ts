export type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never;

export type ReduceTupleOn<
  T extends any[],
  FIELD extends keyof TupleToUnion<T>,
  EXTRACTFIELD extends keyof TupleToUnion<T>
> = { [key in TupleToUnion<T>[FIELD]]: Extract<TupleToUnion<T>, { [exc in FIELD]: key }>[EXTRACTFIELD] };
