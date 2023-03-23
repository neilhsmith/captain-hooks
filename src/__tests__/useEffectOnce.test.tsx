import useEffectOnce from "../useEffectOnce"

describe("useEffectOnce", () => {
  it("should run an effect one single time", () => {
    let actual = 0
    const { rerender } = renderHook(useEffectOnce, {
      initialProps: () => {
        actual += 1
      },
    })

    rerender()

    expect(actual).toBe(1)
  })
})
