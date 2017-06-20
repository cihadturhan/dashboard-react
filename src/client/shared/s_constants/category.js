import {IOS, PLAY} from './storeNames';
import {slugify} from '../maUtils';
const category = {};

category[IOS] = [
  {"id": "36", "name": "All Categories", "active": true, "parent": null},
  {"id": "6000", "name": "Business", "active": true, "parent": null},
  {"id": "6001", "name": "Weather", "active": true, "parent": null},
  {"id": "6002", "name": "Utilities", "active": true, "parent": null},
  {"id": "6003", "name": "Travel", "active": true, "parent": null},
  {"id": "6004", "name": "Sports", "active": true, "parent": null},
  {"id": "6005", "name": "Social Networking", "active": true, "parent": null},
  {"id": "6006", "name": "Reference", "active": true, "parent": null},
  {"id": "6007", "name": "Productivity", "active": true, "parent": null},
  {"id": "6008", "name": "Photo & video", "active": true, "parent": null},
  {"id": "6009", "name": "News", "active": true, "parent": null},
  {"id": "6010", "name": "Navigation", "active": true, "parent": null},
  {"id": "6011", "name": "Music", "active": true, "parent": null},
  {"id": "6012", "name": "Lifestyle", "active": true, "parent": null},
  {"id": "6013", "name": "Health & Fitness", "active": true, "parent": null},
  {"id": "6014", "name": "Games", "active": true, "parent": null},
  {"id": "6015", "name": "Finance", "active": true, "parent": null},
  {"id": "6016", "name": "Entertainment", "active": true, "parent": null},
  {"id": "6017", "name": "Education", "active": true, "parent": null},
  {"id": "6018", "name": "Books", "active": true, "parent": null},
  {"id": "6020", "name": "Medical", "active": true, "parent": null},
  {"id": "6021", "name": "Newsstand", "active": true, "parent": null},
  {"id": "6022", "name": "Catalogs", "active": true, "parent": null},
  {"id": "6023", "name": "Food and drink", "active": true, "parent": null},
  {"id": "6024", "name": "Shopping", "active": true, "parent": null},
  {"id": "6025", "name": "Stickers", "active": false, "parent": null},

  {"id": "7001", "name": "Action ", "active": true, "parent": 6014},
  {"id": "7002", "name": "Adventure", "active": true, "parent": 6014},
  {"id": "7003", "name": "Arcade", "active": true, "parent": 6014},
  {"id": "7004", "name": "Board", "active": true, "parent": 6014},
  {"id": "7005", "name": "Card", "active": true, "parent": 6014},
  {"id": "7006", "name": "Casino", "active": true, "parent": 6014},
  {"id": "7007", "name": "Dice", "active": true, "parent": 6014},
  {"id": "7008", "name": "Educational", "active": true, "parent": 6014},
  {"id": "7009", "name": "Family", "active": true, "parent": 6014},
  {"id": "7011", "name": "Music", "active": true, "parent": 6014},
  {"id": "7012", "name": "Puzzle", "active": true, "parent": 6014},
  {"id": "7013", "name": "Racing", "active": true, "parent": 6014},
  {"id": "7014", "name": "Role Playing", "active": true, "parent": 6014},
  {"id": "7015", "name": "Simulation", "active": true, "parent": 6014},
  {"id": "7016", "name": "Sports", "active": true, "parent": 6014},
  {"id": "7017", "name": "Strategy", "active": true, "parent": 6014},
  {"id": "7018", "name": "Trivia", "active": true, "parent": 6014},
  {"id": "7019", "name": "Word", "active": true, "parent": 6014}
];

category[PLAY] = [
  {"id": "26", "name": "All Categories", "active": true, "parent": null},
  {"id": "0", "name": "Books and reference", "active": true, "parent": null},
  {"id": "1", "name": "Business", "active": true, "parent": null},
  {"id": "2", "name": "Comics", "active": true, "parent": null},
  {"id": "3", "name": "Communication", "active": true, "parent": null},
  {"id": "4", "name": "Education", "active": true, "parent": null},
  {"id": "5", "name": "Entertainment", "active": true, "parent": null},
  {"id": "6", "name": "Finance", "active": true, "parent": null},
  {"id": "7", "name": "Health and fitness", "active": true, "parent": null},
  {"id": "8", "name": "Libraries and demo", "active": true, "parent": null},
  {"id": "9", "name": "Lifestyle", "active": true, "parent": null},
  {"id": "10", "name": "App Wallpaper", "active": false, "parent": null},
  {"id": "11", "name": "Media and video", "active": false, "parent": null},
  {"id": "12", "name": "Medical", "active": true, "parent": null},
  {"id": "13", "name": "Music and audio", "active": true, "parent": null},
  {"id": "14", "name": "News and magazines", "active": true, "parent": null},
  {"id": "15", "name": "Personalization", "active": true, "parent": null},
  {"id": "16", "name": "Photography", "active": true, "parent": null},
  {"id": "17", "name": "Productivity", "active": true, "parent": null},
  {"id": "18", "name": "Shopping", "active": true, "parent": null},
  {"id": "19", "name": "Social", "active": true, "parent": null},
  {"id": "20", "name": "Sports", "active": true, "parent": null},
  {"id": "21", "name": "Transportation", "active": false, "parent": null},
  {"id": "22", "name": "Travel and local", "active": false, "parent": null},
  {"id": "23", "name": "Tools", "active": true, "parent": null},
  {"id": "24", "name": "Weather", "active": true, "parent": null},
  {"id": "25", "name": "App widgets", "active": false, "parent": null},
  {"id": "27", "name": "Games", "active": true, "parent": null},

  {"id": "28", "name": "Action", "active": true, "parent": 27},
  {"id": "29", "name": "Adventure", "active": true, "parent": 27},
  {"id": "30", "name": "Arcade", "active": true, "parent": 27},
  {"id": "31", "name": "Board", "active": true, "parent": 27},
  {"id": "32", "name": "Card", "active": true, "parent": 27},
  {"id": "33", "name": "Casino", "active": true, "parent": 27},
  {"id": "34", "name": "Casual", "active": true, "parent": 27},
  {"id": "35", "name": "Educational", "active": true, "parent": 27},
  {"id": "36", "name": "Family", "active": false, "parent": 27},
  {"id": "37", "name": "Music", "active": true, "parent": 27},
  {"id": "38", "name": "Puzzle", "active": true, "parent": 27},
  {"id": "39", "name": "Racing", "active": true, "parent": 27},
  {"id": "40", "name": "Role playing", "active": true, "parent": 27},
  {"id": "41", "name": "Simulation", "active": true, "parent": 27},
  {"id": "42", "name": "Sports", "active": true, "parent": 27},
  {"id": "43", "name": "Strategy", "active": true, "parent": 27},
  {"id": "44", "name": "Trivia", "active": true, "parent": 27},
  {"id": "45", "name": "Word", "active": true, "parent": 27},
  {"id": "46", "name": "Maps and navigation", "active": true, "parent": null},
  {"id": "47", "name": "Android wear", "active": true, "parent": null},
  {"id": "48", "name": "Art and design", "active": true, "parent": null},
  {"id": "49", "name": "Auto and vehicles", "active": true, "parent": null},
  {"id": "50", "name": "Beauty", "active": true, "parent": null},
  {"id": "51", "name": "Dating", "active": true, "parent": null},
  {"id": "52", "name": "Events", "active": true, "parent": null},
  {"id": "53", "name": "House and home", "active": true, "parent": null},
  {"id": "54", "name": "Parenting", "active": true, "parent": null},
  {"id": "55", "name": "Video players", "active": true, "parent": null}
];

category.DEFAULT_IOS_CATEGORY = category[IOS][0];
category.DEFAULT_PLAY_CATEGORY = category[PLAY][0];

category.getList = function (storeName) {
  if (storeName == PLAY) {
    let activeNonSubCategories = category[PLAY].filter(function (d) {
      return d.active && !d.parent;
    });
    return activeNonSubCategories.sort(function (a, b) {
      return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
    });
  }
  else {
    return category[IOS].filter(function (d) {
      return d.active && !d.parent;
    });
  }
};

category.findById = function (storeName, categoryId) {
  let list = (storeName == PLAY) ? category[PLAY] : category[IOS];

  return list.find(function (e) {
    return e.id == categoryId;
  });
};

category.getSubCategoriesByParentId = function(storeName, parentId){
  let list = (storeName == PLAY) ? category[PLAY] : category[IOS];

  return list.filter(function (category) {
    return category.parent == parentId;
  });
};

category.findByName = function (storeName, name) {
  let list = (storeName == PLAY) ? category[PLAY] : category[IOS];

  return list.find(function (e) {
    return e.name.toLowerCase() === name.toLowerCase();
  });
};

category.findBySlug = function (storeName, name) {
  let list = (storeName == PLAY) ? category[PLAY] : category[IOS];

  return list.find(function (e) {
    return slugify(e.name) === slugify(name);
  });
};

category.isActivePlayCategory = function(id) {
  let data = category[PLAY].filter(function (d) {
    return d.active && d.id == id;
  });

  return data.length > 0;
};

category.isActiveIOSCategory = function(id) {
  let data = category[IOS].filter(function (d) {
    return d.id == id && d.active;
  });

  return data.length > 0;
};

category.getDefaultCategory = function (storename) {
  return (storename == IOS) ? category.DEFAULT_PLAY_CATEGORY : category.DEFAULT_IOS_CATEGORY;
};

category.findActiveCategoryById = function (storeName, id) {
  if ((storeName != PLAY && category.isActiveIOSCategory(id)) ||
      (storeName == PLAY && category.isActivePlayCategory(id))) {
    return category.findById(storeName, id);
  }
  else {
    return category.getDefaultCategory(storeName);
  }
};

export default category;


