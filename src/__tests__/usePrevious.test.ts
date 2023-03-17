import { usePrevious } from "../usePrevious"

describe("usePrevious", () => {
  it("should return the initialValue on first render", () => {
    const { result } = renderHook(usePrevious, {
      initialProps: 42,
    })

    expect(result.current).toBe(42)
  })

  it("returns the previous render's value", () => {
    const { rerender, result } = renderHook(usePrevious, {
      initialProps: 42,
    })

    rerender(99)
    expect(result.current).toBe(42)

    rerender(-1234)
    expect(result.current).toBe(99)

    rerender(0)
    expect(result.current).toBe(-1234)
  })
})
