
class Shop {
  constructor(items=[], specialItems=new SpecialItems, regularItems = new RegularItems){
    this.items = items;
    this.specialItems = specialItems
    this.regularItems = regularItems
  }

  updateItems() {
    for (var i = 0; i < this.items.length; i++) {
      this.regularItems.decreaseSellIn(this.items[i])
      if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        this.specialItems.backstagePasses(this.items[i])
      } else if (this.items[i].name == "Aged Brie") {
        this.specialItems.agedBrie(this.items[i])
      } else if (this.items[i].sellIn < 0 || this.items[0].name.includes("Conjured")) {
        this.regularItems.decreaseQuality(2, this.items[i])
      } else {
        this.regularItems.decreaseQuality(1, this.items[i])
      }
    }
    return this.items;
  };
};