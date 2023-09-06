// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function make(name, sellIn, quality) {
  return {
          name: name,
          sellIn: sellIn,
          quality: quality
        };
}

var Item = {
  make: make
};

function updateQuality(items) {
  return items.map(function (item) {
              var newItem = item;
              if (item.name !== "Aged Brie" && item.name !== "Backstage passes to a TAFKAL80ETC concert") {
                if (item.quality > 0 && item.name !== "Sulfuras, Hand of Ragnaros") {
                  newItem = {
                    name: item.name,
                    sellIn: item.sellIn,
                    quality: item.quality - 1 | 0
                  };
                }
                
              } else if (item.quality < 50) {
                newItem = {
                  name: item.name,
                  sellIn: item.sellIn,
                  quality: item.quality + 1 | 0
                };
                if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
                  if (item.sellIn < 11 && item.quality < 50) {
                    newItem = {
                      name: item.name,
                      sellIn: item.sellIn,
                      quality: item.quality + 1 | 0
                    };
                  }
                  if (item.sellIn < 6 && item.quality < 50) {
                    newItem = {
                      name: item.name,
                      sellIn: item.sellIn,
                      quality: item.quality + 1 | 0
                    };
                  }
                  
                }
                
              }
              if (item.name !== "Sulfuras, Hand of Ragnaros") {
                newItem = {
                  name: item.name,
                  sellIn: item.sellIn - 1 | 0,
                  quality: item.quality
                };
              }
              if (item.sellIn < 0) {
                if (item.name !== "Aged Brie") {
                  if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
                    if (item.quality > 0 && item.name !== "Sulfuras, Hand of Ragnaros") {
                      newItem = {
                        name: item.name,
                        sellIn: item.sellIn,
                        quality: item.quality - 1 | 0
                      };
                    }
                    
                  } else {
                    newItem = {
                      name: item.name,
                      sellIn: item.sellIn,
                      quality: 0
                    };
                  }
                } else if (item.quality < 50) {
                  newItem = {
                    name: item.name,
                    sellIn: item.sellIn,
                    quality: item.quality + 1 | 0
                  };
                }
                
              }
              return newItem;
            });
}

exports.Item = Item;
exports.updateQuality = updateQuality;
/* No side effect */
