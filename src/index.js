import { decorate, observable, computed, autorun, transaction } from "mobx";

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
// alert when add new data
autorun(() => {
  if (gs25.basket.length > 0) {
    console.log(gs25.basket[gs25.basket.length - 1]);
  }
});

transaction(() => {
  gs25.select("Water", 800);
  gs25.select("Water", 800);
  gs25.select("Pocachip", 1500);
});

console.log(gs25.total);
