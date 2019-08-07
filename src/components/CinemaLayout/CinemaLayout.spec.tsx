import * as React from "react";

import { mount } from "enzyme";

import { CinemaLayout } from "./CinemaLayout";

describe("CinemaLayout", () => {
  it("should render without errors", () => {
    expect(mount(<CinemaLayout />)).toMatchSnapshot();
  });
});
