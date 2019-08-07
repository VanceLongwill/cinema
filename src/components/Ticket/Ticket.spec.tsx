import * as React from "react"

import { mount } from "enzyme"

import { Ticket } from "./Ticket"

describe("Ticket", () => {
  it("should render without errors", () => {
    expect(mount(<Ticket />)).toMatchSnapshot()
  })
})
