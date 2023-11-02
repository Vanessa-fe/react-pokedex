export const debounce = (fn: Function, timeout: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
         // @ts-ignore
        fn.apply(this, args);
      }, timeout);
    };
  };