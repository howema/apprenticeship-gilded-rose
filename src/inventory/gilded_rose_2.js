// Item constructor. DO NOT MODIFY OR THE GOBLIN WILL EAT YOU!
export function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

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
export function updateQuality(items) {
  //use human words!!
  for (var i = 0; i < items.length; i++) {
    const goods = items[i];
    if (goods.name == "Sulfuras, Hand of Ragnaros") {
      continue;
    }
    goods.sell_in = goods.sell_in - 1;
    //if NOT Brie or BS Passes
    if (
      goods.name != "Aged Brie" &&
      goods.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      goods.quality = decreaseQuality(goods.quality);
      if (goods.sell_in < 0) {
        goods.quality = decreaseQuality(goods.quality);
      }
    }
    //if IS Brie or BS Passes


    
    if (
      (goods.quality < 50 && goods.name == "Aged Brie") ||
      goods.name == "Backstage passes to a TAFKAL80ETC concert"
    ) {
      goods.quality = goods.quality + 1;
      if (goods.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (goods.sell_in < 11) {
          goods.quality = goods.quality + 2;


        }
        if (goods.sell_in < 0) {
         
          goods.quality = goods.quality - goods.quality;

        }
      }
    }




    //If sell_in < 0
    if (goods.sell_in < 0) {
      //If is Brie
      if (goods.name == "Aged Brie" && goods.quality < 50) {
          goods.quality = goods.quality + 1;
      }
    }
  }
}

//   const decreaseSell = (currentSellIn) => {
//    return currentSellIn - 1;
//   };

//     goods.sell_in = decreaseSell(goods.sell_in);

//boolean...isSulphurus: true
//duplicate code blocks

const decreaseQuality = (currentQuality) => {
  if (currentQuality > 0) {
    return currentQuality - 1;
  }
  return currentQuality;
};
