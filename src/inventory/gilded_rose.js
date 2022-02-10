/*
* Update inventory
* @param {Item[]} items - an array of Items representing the inventory to be updated
* Example usage:

const items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Conjured Mana Cake', 3, 6),
];

updateQuality(items);
*/

//  =======================================================================

// Item constructor. DO NOT MODIFY OR THE GOBLIN WILL EAT YOU!
export function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

//  =======================================================================

export function updateQuality(goods) {
  goods.forEach((goods) => {
    goods.sell_in -= 1;
    if (goods.name === "Sulfuras, Hand of Ragnaros") {
      return goods;
    }

    if (goods.name === "Aged Brie") {
      return handleBrie(goods);
    }

    if (goods.name === "Backstage passes to a TAFKAL80ETC concert") {
      return handlePasses(goods);
    }

    if (goods.name === "Conjured Mana Cake") {
      return handleConjured(goods);
    }

    goods.quality = decreaseQuality(goods);
  });
}

const handleBrie = (goods) => {
  if (goods.quality < 50) {
    goods.quality += 1;
  } else {
    goods.quality === 50;
  }
  if (goods.sell_in < 0 && goods.quality < 50) {
    goods.quality += 1;
  }
};

const handlePasses = (goods) => {
  if (goods.name === "Backstage passes to a TAFKAL80ETC concert") {
    goods.quality += 1;
    if (goods.sell_in < 11) {
      goods.quality += 2;
    }
    if (goods.sell_in < 0) {
      goods.quality -= goods.quality;
    }
  }
};

const decreaseQuality = (goods) => {
  if (goods.quality > 0) {
    if (goods.sell_in < 0) {
      goods.quality -= 2;
    } else {
      goods.quality -= 1;
    }
  }
  return goods.quality;
};

const handleConjured = (goods) => {
  for (let i = 0; i < 2; i++) {
    decreaseQuality(goods);
  }
};
