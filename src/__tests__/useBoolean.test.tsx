import { act } from "@testing-library/react"
import useBoolean from "../useBoolean"

describe("useBoolean", () => {
  it("should initially return the `initialValue`", () => {
    const { result: falseResult } = renderHook(useBoolean, {
      initialProps: false,
    })
    const { result: trueResult } = renderHook(useBoolean, {
      initialProps: true,
    })

    expect(falseResult.current[0]).toBe(false)
    expect(trueResult.current[0]).toBe(true)
  })

  it("defaults to false", () => {
    const { result } = renderHook(useBoolean)

    expect(result.current[0]).toBe(false)
  })

  it("sets a new value", () => {
    const { result } = renderHook(useBoolean)
    const [_, setters] = result.current
    expect(result.current[0]).toBe(false)

    act(() => {
      setters.set(true)
    })

    expect(result.current[0]).toBe(true)
  })

  it("turns on", () => {
    const { result } = renderHook(useBoolean)
    const [_, setters] = result.current
    expect(result.current[0]).toBe(false)

    act(() => {
      setters.on()
    })

    expect(result.current[0]).toBe(true)
  })

  it("turns off", () => {
    const { result } = renderHook(useBoolean, { initialProps: true })
    const [_, setters] = result.current
    expect(result.current[0]).toBe(true)

    act(() => {
      setters.off()
    })

    expect(result.current[0]).toBe(false)
  })

  it("toggles", () => {
    const { result } = renderHook(useBoolean)
    const [_, setters] = result.current
    expect(result.current[0]).toBe(false)

    act(() => {
      setters.toggle()
    })

    expect(result.current[0]).toBe(true)
  })
})
