export const findByIndex = (items, id) => {
  return items.findIndex((item) => item.id === id);
};

export const moveItem = (list, from, to) => {
  const start = to < 0 ? list.length + to : to;
  const itemFound = list.splice(from, 1)[0];
  list.splice(start, 0, itemFound);
  return list;
};

export const isHidden = (isPreview, draggedItem, itemType, id) => {
  return (
    !isPreview && 
    draggedItem &&
    draggedItem.type === itemType && 
    draggedItem.id === id
  )
};
