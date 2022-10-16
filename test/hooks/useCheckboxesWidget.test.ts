import {
  deselectValue,
  selectValue,
} from "../../src/hooks/useCheckboxesWidget";

import type { EnumOptionsType } from "@rjsf/utils";

describe("selectValue", () => {
  // const selectValue0 = (value: any, selected: any, all: any[]) => {
  //   const at = all.indexOf(value);
  //   const updated = selected.slice(0, at).concat(value, selected.slice(at));

  //   // As inserting values at predefined index positions doesn't work with empty
  //   // arrays, we need to reorder the updated selection to match the initial order
  //   return updated.sort((a: any, b: any) => all.indexOf(a) > all.indexOf(b));
  // };
  // const selectValueOld = (value: any, selected: any, enumOptions: EnumOptionsType[])=> {
  //   return selectValue0(value, selected, enumOptions.map(({ value })=>value));
  // };
  const enumOptions: EnumOptionsType[] = [
    { label: "a", value: "A" },
    { label: "b", value: "B" },
    { label: "c", value: "C" },
    { label: "d", value: "D" },
    { label: "e", value: "E" },
  ];

  test("selectValue", () => {
    let selected: any[] = [];
    selected = selectValue("C", null, enumOptions);
    expect(selected).toEqual(["C"]);
    selected = selectValue("C", selected, enumOptions);
    expect(selected).toEqual(["C"]);
    selected = selectValue("A", selected, enumOptions);
    expect(selected).toEqual(["A", "C"]);
    selected = selectValue("E", selected, enumOptions);
    expect(selected).toEqual(["A", "C", "E"]);
    selected = selectValue("B", selected, enumOptions);
    expect(selected).toEqual(["A", "B", "C", "E"]);
    selected = selectValue("D", selected, enumOptions);
    expect(selected).toEqual(["A", "B", "C", "D", "E"]);
  });

  test("deselectValue", () => {
    let selected: any[] = ["A", "B", "C", "D", "E"];
    selected = deselectValue("D", selected);
    expect(selected).toEqual(["A", "B", "C", "E"]);
    selected = deselectValue("A", selected);
    expect(selected).toEqual(["B", "C", "E"]);
    selected = deselectValue("A", selected);
    expect(selected).toEqual(["B", "C", "E"]);
    selected = deselectValue("C", selected);
    expect(selected).toEqual(["B", "E"]);
    selected = deselectValue("B", selected);
    expect(selected).toEqual(["E"]);
    selected = deselectValue("E", selected);
    expect(selected).toEqual([]);
  });
});
