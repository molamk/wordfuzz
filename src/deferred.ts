export class Deferred<T> {
  protected promise: Promise<T>;

  constructor(p: Promise<T>) {
    this.promise = p;
  }

  public then(
    onfulfilled?: (value: T) => T | PromiseLike<T>,
    onrejected?: (reason: T) => PromiseLike<never>
  ): Promise<T> {
    return this.promise.then(onfulfilled, onrejected);
  }

  public catch(onRejected?: (reason: T) => PromiseLike<never>): Promise<T> {
    return this.promise.catch(onRejected);
  }

  public finally(onFinally?: () => void) {
    return this.promise.finally(onFinally);
  }
}
