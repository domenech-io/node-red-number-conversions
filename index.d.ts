declare module "node-red-domenechio-util-fn" {
  export const Num: {
      scale: (value: number, min: number, max: number) => number;
      normalize: (value:number, valueMin:number, valueMax:number) => number;
  };
}
