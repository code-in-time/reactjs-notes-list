/**
 * This will do a deep clone
 * This was needed as cloning like this [...arr] or arr.slice(0)
 * will not do a deep clone of an array of objects.
 * @param arr -(array)
 */
export const deepClone = arr => JSON.parse(JSON.stringify(arr));

/**
 * This is a shortcut to write a console.log();
 * @param logMsg - (string or array)
 */
export const logger = logMsg => console.log(logMsg);


/**
 * This will add two number together;
 * @param numb1 - (int)
 * @param numb2 - (int)
 */
export const add = (numb1, numb2) => numb1 + numb2;
