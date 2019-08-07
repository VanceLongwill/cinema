import * as React from "react"

import { mount } from "enzyme"

import { Modal } from "./Modal"

describe("Modal", () => {
  it("should render without errors", () => {
    expect(mount(<Modal />)).toMatchSnapshot()
  })
})
