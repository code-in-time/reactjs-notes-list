/**
 * This will clone an array
 * This was needed as cloning like this [...arr] or arr.slice(0)
 * will not do a deep clone of an array of objects.
 * @param arr -(array)
 */
export const deepCloneArray = arr => JSON.parse(JSON.stringify(arr));

/**
 * This is a shortcut to write a console.log();
 * @param logMsg - (string or array)
 */
export const log = logMsg => console.log(logMsg);
