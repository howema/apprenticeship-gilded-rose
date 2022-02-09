import { Item, updateQuality } from './gilded_rose_2';

describe('`updateQuality`', () => {
  it('deprecates the sell in by one for a Haunted Shoe', () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  // it.todo('This is a good place for a good test!');


  it('deprecates the quality by one for a Haunted Shoe', () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(9);
  });

  //=====================

  //brie quality +1 as sell_in -1

  it('increases the quality by one for aged brie', () => {
    const standardItem = new Item('Aged Brie', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(11);
  });


  it('deprecates the sell_in by one for aged brie', () => {
    const standardItem = new Item('Aged Brie', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  //======================


  //if quality is already 0, deprecation stops!  
  //quality stays 0

  it('verifies that an item is never negative', () => {
    const standardItem = new Item('Elixir of the Mongoose', 1, 0);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(0);
  });


  //trying to cover some lines below 33


  it('verifies that the quality of an item never increases to more than 50', () => {
    const standardItem = new Item('Aged Brie', 5, 50);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(50);
  });


 

  //==================
  //backstage passes
  //line 33

   it('increases BS pass quality by one if the quality is currently less than 50 and the sell_in is less than 11 AND IF its not BS passes', () => {
    const standardItem = new Item('Aged Brie', 5, 48);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(49);
  });

   it('increases BS pass quality by two if the quality is currently less than 50 and the sell_in is less than 11 AND if it IS BS passes', () => {
    const standardItem = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(48);
  });

  //===================


  //line 53 to 61


  it('... and sell_in is less than zero, and its not Brie, BS passes, of Sulfuras--quality will decrease by 2. Once)', () => {
    const standardItem = new Item('Elixir of the Mongoose', -1, 50);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(-2);
    expect(standardItem.quality).toBe(48);
  });




  // 62 - 64 

  it('if sell_in is < 0 with quality > 0, and IS Aged Brie, quality increases by one', () => {
    const standardItem = new Item('Aged Brie', -1, 49);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(50);
  });

  
  //sulfuras will always be 50

  it('sulphuras quality never changes', () => {
    const standardItem = new Item('Sulfuras, Hand of Ragnaros', -1, 50);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(50);
  });

  //61, can't be sulfuras to hit 61

  it('if sell_in is < 0 with quality > 0, and IS NOT Sulfuras, Brie, or BS passes, quality decreases by two', () => {
    const standardItem = new Item('Elixir of the Mongoose', -1, 50);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(48);
  });

  it('if sell_in is < 0 with quality > 0, and IS NOT Sulfuras, Brie, or BS passes, sell_in decreases by one', () => {
    const standardItem = new Item('Elixir of the Mongoose', -1, 50);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(-2);
  });

  //must refute line 56 to access line 62
  //62
  //=============

  it('if sell_in is < 0 with quality > 0, and IS BS passes, quality becomes quality subtracted by same quality', () => {
    const standardItem = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(0);
  });

  //this may be a duplicate
  it('if sell_in is < 0 with quality > 0, and IS BS passes, sell_in decreases by 1', () => {
    const standardItem = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(-2);
  });

  //===============

  //66

  ///if anything but Sulfuras, sell_in at least decreases by 1

  it('if is Brie with quality less than 50, quality increases by two', () => {
    const standardItem = new Item('Aged Brie', -1, 45);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(47);
  });

  it('if is BS Passes, with quality less than 50, quality increases by three, then gets subtracted from itself', () => {
    const standardItem = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 45);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(0);
  });





});
