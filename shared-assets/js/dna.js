class Rand {
  constructor(seed) { this.s = (seed >>> 0) || 1; }
  next() { const x = Math.sin(this.s++) * 10000; return x - Math.floor(x); }
  range(a, b) { return a + this.next() * (b - a); }
}
