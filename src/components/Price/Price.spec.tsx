import * as React from "react"

import { mount } from "enzyme"

import { Price } from "./Price"

describe("Price", () => {
  it("should render without errors", () => {
    expect(mount(<Price />)).toMatchSnapshot()
  })
})
