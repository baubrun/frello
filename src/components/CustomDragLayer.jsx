import React from "react";
import { useDragLayer } from "react-dnd";
import { CustomDragLayerContainer } from "../styledComponents";
import  Column  from "../components/Column";


const getItemStyles = (currentOffset) => {
    if (!currentOffset){
        return {
            display: "none"
        }
    }
    const {x, y} = currentOffset
    const transform = `translate(${x}px, ${y}px)`
    return {
        transform,
        WebKitTransform: transform
    }

}


const CustomDragLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));
  return isDragging ? (
    <CustomDragLayerContainer>
        <div style={getItemStyles(currentOffset)}>
        <Column id={item.id} index={item.index} text={item.text} />

        </div>
    </CustomDragLayerContainer>
  ) : null;
};

export default CustomDragLayer;
