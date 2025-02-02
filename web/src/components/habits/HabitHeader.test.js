import React from "react";
import { shallow } from "enzyme";
import HabitHeader from "./HabitHeader";
import { isToday } from "@habit-geek/shared/utils/dateUtils";

jest.mock("@habit-geek/shared/utils/dateUtils", () => ({
  isToday: jest.fn().mockReturnValue(false)
}));

describe("HabitHeader component", () => {
  it("Renders static elements", () => {
    const habitHeader = shallow(<HabitHeader />);
    expect(habitHeader.find(".habit__cell-action-container").length).toBe(1);
    expect(habitHeader).toMatchSnapshot();
  });

  it("Hides header placeholder when on readonly mode", () => {
    const habitHeader = shallow(<HabitHeader isReadOnly={true} />);
    expect(habitHeader.find(".habit__cell-action-container").length).toBe(0);
  });

  it("Shows border around current date", () => {
    isToday.mockReturnValueOnce(true);
    const habitHeader = shallow(<HabitHeader />);
    expect(habitHeader.find(".habit__cell--today-header").length).toBe(1);
  });
});
