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
      //if not Brie or BS Passes
      if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (items[i].quality > 0) {
          if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            items[i].quality = items[i].quality - 1
          }
        }
      } else {
        //if IS Brie or BS Passes
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
          if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            // I combined the 2 sell_in req, made + 2
            if (items[i].sell_in < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 2
              }
            }
          }
        }
      }
      //If not Sulfuras, sell_in - 1
      if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
        // items[i].sell_in = items[i].sell_in - 1;
        items[i].sell_in = decreaseSell(items[i].sell_in);
      }
      //If sell_in < 0
      if (items[i].sell_in < 0) {
        //If NOT Brie
        if (items[i].name != 'Aged Brie') {
          //If NOT BS passes
          if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].quality > 0) {
              if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                items[i].quality = items[i].quality - 1
              }
            }
          } else {
            // if IS BS passes
            items[i].quality = items[i].quality - items[i].quality
          }
        } else {
          // if IS Brie
          //if quality < 50, increase quality by 1
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 1
          }
        }
      }
    }
  }
  
  const decreaseSell = (currentSellIn) => {
   return currentSellIn - 1;
  };

//   const belowFiftyPlusOne = () => {
//       return  
//       }
//   }





  
  //boolean...isSulphurus: true
  //duplicate code blocks
  