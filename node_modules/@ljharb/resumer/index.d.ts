import through = require('@ljharb/through');

declare function resumer(
    write?: Parameters<typeof through>[0],
    end?: Parameters<typeof through>[1]
): ReturnType<typeof through>;

export = resumer;
