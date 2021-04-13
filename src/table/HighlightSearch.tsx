import * as React from "react";
import { HighlitedSearchedWord } from "./styled";

const HighlightSearch = ({ search, children }) => {
  if (!search.trim()) {
    return children;
  }
  const splitedText = children.toString().split(search);
  return splitedText.map((text, index) => {
    return (
      <span key={text + index}>
        {text}
        {index !== splitedText.length - 1 && (
          <HighlitedSearchedWord>{search}</HighlitedSearchedWord>
        )}
      </span>
    );
  });
};

export default HighlightSearch;
