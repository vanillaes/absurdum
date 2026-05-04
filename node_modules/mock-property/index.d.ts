type RestoreFunction = () => void;

type OptionDelete = {
    delete: true;
    nonConfigurable?: boolean;

    nonEnumerable?: never;
    nonWritable?: never;
    get?: never;
    set?: never;
    value?: never;
};

type OptionData<T = unknown> = {
    value?: T;
    nonConfigurable?: boolean;
    nonEnumerable?: boolean;
    nonWritable?: boolean;
    delete?: false;

    get?: never;
    set?: never;
};

type Getter<T> = (() => void) | (() => T);
type Setter<T> = (v: T) => void;

type OptionAccessor<T = unknown> = {
    get?: Getter<T>;
    set?: Setter<T>;
    nonConfigurable?: boolean;
    nonEnumerable?: boolean;
    delete?: false;

    nonWritable?: never;
    value?: never;
};

type MockPropertyOptions<T = unknown> =
    | OptionDelete
    | OptionData<T>
    | OptionAccessor<T>;

declare function mockProperty<T = unknown>(
    obj: Record<PropertyKey, T | undefined> | T[],
    prop: PropertyKey,
    options: MockPropertyOptions<T>,
): RestoreFunction;

export = mockProperty;
