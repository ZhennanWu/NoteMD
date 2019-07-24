export const rejectedPromise = <T>(reason: string) =>
    new Promise<T>((resolve, reject) => reject(reason));
