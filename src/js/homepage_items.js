/* eslint-disable no-use-before-define */
import { Item, updateQuality } from "../inventory/gilded_rose.js";

const getNewItems = () => [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Conjured Mana Cake", 3, 6),
];

const getItemRowHtml = ({ name, sell_in: sellIn, quality }) => {
  const itemHtml = document.createElement("tr");
  itemHtml.innerHTML += `<td>${name}</td>`;
  itemHtml.innerHTML += `<td>${quality}</td>`;
  itemHtml.innerHTML += `<td>${sellIn}</td>`;
  return itemHtml;
};

const renderItemsOnHomepage = (items) => {
  const elementItemsList = document.querySelector("#items > tbody");
  elementItemsList.innerHTML = null;
  items.forEach((element) => {
    const itemHtml = getItemRowHtml(element);
    elementItemsList.append(itemHtml);
  });
};

const bindEventListenToUpdateButton = (items) => {
  const updateButton = document.getElementById("update-items-button");
  updateButton.addEventListener("click", (e) => {
    e.preventDefault();
    updateQuality(items);
    renderItemsOnHomepage(items);
  });
};

const bindEventListenToResetButton = (items) => {
  const resetButton = document.getElementById("reset-items-button");
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    showItemsOnHomePage(items);
  });
};

const showItemsOnHomePage = () => {
  const items = getNewItems();
  renderItemsOnHomepage(items);
  bindEventListenToUpdateButton(items);
  bindEventListenToResetButton(items);
};

showItemsOnHomePage();
