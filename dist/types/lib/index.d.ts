interface IOptions {
    wordsPerMinute?: number | null;
    locale?: string | null;
}
interface IReadingTime {
    text: string;
    minutes: number;
    time: number;
    words: number;
}
declare const readingTime: (data: string | null | undefined, opts?: IOptions | undefined) => IReadingTime;
export { readingTime, IOptions, IReadingTime };
