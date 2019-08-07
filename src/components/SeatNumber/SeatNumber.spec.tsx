import * as React from "react"

import { mount } from "enzyme"

import { SeatNumber } from "./SeatNumber"

describe("SeatNumber", () => {
  it("should render without errors", () => {
    expect(mount(<SeatNumber />)).toMatchSnapshot()
  })
})
