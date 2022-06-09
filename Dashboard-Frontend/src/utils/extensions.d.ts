interface Number {
  toTest: (n?: number) => number;
}

interface String {}

Number.prototype.toTest = function (): number {
  return 0;
};
