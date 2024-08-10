declare module "node-red-number-conversions" {
  export const Num: {
      scale: (value: number, min: number, max: number) => number;
      normalize: (value:number, valueMin:number, valueMax:number) => number;
  };
}
