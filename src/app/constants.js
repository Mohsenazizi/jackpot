const constants = (function () {
  const items = ["3xBAR", "BAR", "2xBAR", "7", "Cherry"];
  const colItemsCount = items.length;
  const colsCount = 3;
  const imageType = ".png";
  const imagesPath = "/images/";
  const itemHeight = 130;
  const defaultScore = 5000;
  return {
    items,
    colItemsCount,
    colsCount,
    imageType,
    imagesPath,
    itemHeight,
  };
})();
export default constants;
