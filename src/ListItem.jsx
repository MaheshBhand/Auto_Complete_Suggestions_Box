import React from "react";
import PropTypes from "prop-types";

const ListItem = ({
  item,
  index,
  hideSuggestions,
  setText,
  onSelect,
  cursor
}) => (
  <li
    onClick={() => {
      hideSuggestions();
      setText(item.name);
      onSelect(item);
    }}
    className={cursor === index ? "active" : ""}
  >
    {item.name}
  </li>
);

ListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  hideSuggestions: PropTypes.func,
  setText: PropTypes.func,
  onSelect: PropTypes.func,
  cursor: PropTypes.number
};

export default ListItem;
