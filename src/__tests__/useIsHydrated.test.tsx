import React from "react"
import { renderToString } from "react-dom/server"
import useIsHydrated from "../useIsHydrated"

const TestComponent = () => {
  const isHyrated = useIsHydrated()

  return <span>{isHyrated ? "hydrated" : "not hydrated"}</span>
}

describe("useIsHydrated", () => {
  it("should return false when not running effects", () => {
    // renderToString to avoid running any state / effects
    const result = renderToString(<TestComponent />)

    expect(result).toContain("not hydrated")
  })

  it("should return true", () => {
    const { result } = renderHook(useIsHydrated)

    expect(result.current).toBe(true)
  })
})
