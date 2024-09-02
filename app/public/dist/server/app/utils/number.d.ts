export declare const min: (minimum: number) => (value: number) => number;
export declare const max: (maximum: number) => (value: number) => number;
export declare const clamp: (num: number, min: number, max: number) => number;
export declare const roundTo2Digits: (value: number) => number;
export declare const average: (...values: number[]) => number;
export declare const fpsToDuration: (targetFramesPerSecond: number) => (nbFrames: number) => number;
