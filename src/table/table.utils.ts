import * as _ from "lodash";

export const sortData = (
  data: { [key: string]: any }[],
  activeColumn: string,
  sortDirection: string
) => {
  switch (sortDirection) {
    case "asc":
      return _.sortBy(data, [activeColumn]);
    case "desc":
      return _.sortBy(data, [activeColumn]).reverse();
    default:
      return data;
  }
};

export const directionsList = ["asc", "desc", ""];
