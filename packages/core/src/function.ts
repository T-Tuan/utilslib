export const noop = () => {};

/**
 * 确保传入的方法只能被执行一次
 *
 * @param {(...args: any) => any} func - 要执行的方法。
 * @returns {(...args: any) => any} 返回一个新的方法，该方法只会执行一次
 */
export function once(fn: (...args: any) => any) {
  // 利用闭包判断函数是否执行过
  let called = false;
  return function (this: unknown) {
    if (!called) {
      called = true;
      return fn.apply(this, [...arguments]);
    }
  };
}

type UnpackPromise<T> = T extends Promise<infer U> ? U : T;

/**
 * 通用错误捕获函数，用于执行可能会抛出异常的函数，并捕获异常信息。
 *
 * @type {<F extends (...args: any) => any, R = UnpackPromise<ReturnType<F>>>(
 *   this: unknown,
 *   fn: F
 * ) => Promise<[0, R, null] | [1, null, unknown]>}
 * @param {F} fn - 可能会抛出异常的函数。
 * @returns {Promise<[0, R, null] | [1, null, unknown]>} 返回一个元组，包含错误标识、函数执行结果或 null 、异常信息或 null。
 */
export async function catchError<F extends (...args: any) => any, R = UnpackPromise<ReturnType<F>>>(
  this: unknown,
  fn: F
): Promise<[0, R, null] | [1, null, unknown]> {
  let data: R | null;
  let err: 0 | 1;
  let errMsg: unknown | null;

  try {
    data = await fn.apply(this, [...arguments]);
    err = 0;
    errMsg = null;
    return [err, data as R, errMsg as null];
  } catch (error) {
    data = null;
    err = 1;
    errMsg = error;
    return [err, data, errMsg];
  }
}
