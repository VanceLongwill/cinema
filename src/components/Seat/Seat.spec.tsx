import * as React from "react"

import { mount } from "enzyme"

import { Seat } from "./Seat"

describe("Seat", () => {
  it("should render without errors", () => {
    expect(mount(<Seat />)).toMatchSnapshot()
  })
})
