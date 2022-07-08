declare global {
  interface Function {
    /**
     * Returns the name of the function. Function names are read-only and can not be changed.
     * @deprecated no recommended our feature due to wepback minify/uglify features
     */
    readonly name: string;
  }
}

// eslint-disable-next-line prettier/prettier
export { };
