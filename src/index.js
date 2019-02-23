import { decorate, observable, computed, autorun } from "mobx";

class GS25 {
  basket = [];

  get total() {
    console.log("calculating..!");
    // Total calculate the price of object in array inside with Reduce function // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    return this.basket.reduce((prev, curr) => prev + curr.price, 0);
  }

  select(name, price) {
    this.basket.push({ name, price });
  }
}

// Apply Mobx function each value by decorate
decorate(GS25, {
  basket: observable,
  total: computed
});

const gs25 = new GS25();
autorun(() => gs25.total);
gs25.select("water", 800);
console.log(gs25.total);
gs25.select("water", 800);
console.log(gs25.total);
gs25.select("water", 1500);
console.log(gs25.total);
