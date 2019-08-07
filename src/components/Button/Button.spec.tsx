import * as React from "react"

import { mount } from "enzyme"

import { Button } from "./Button"

describe("Button", () => {
  it("should render without errors", () => {
    expect(mount(<Button />)).toMatchSnapshot()
  })
})
