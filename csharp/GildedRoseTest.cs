﻿using Xunit;
using System.Collections.Generic;

namespace csharp
{
    public class GildedRoseTest
    {
        [Fact]
        public void Foo()
        {
            IList<Item> Items = new List<Item> { new Item { Name = "foo", SellIn = 0, Quality = 0 } };
            GildedRose app = new GildedRose(Items);
            app.UpdateQuality();
            Assert.Equal("fixme", Items[0].Name);
        }
    }
}
