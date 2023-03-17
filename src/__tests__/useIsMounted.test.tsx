import React, { useEffect, useState } from "react"
import { renderToString } from "react-dom/server" // TODO: global this
import useIsMounted from "../useIsMounted"

const TestComponent = ({ initialValue }: { initialValue: boolean }) => {
  const isMounted = useIsMounted(initialValue)
  const [state, setState] = useState(false)

  useEffect(() => {
    if (isMounted.current) setState(true)
  }, [isMounted])

  return <span>{state ? "mounted" : "not mounted"}</span>
}

describe("useIsMounted", () => {
  it("should respect the `initialValue` on first render", () => {
    // we SSR renderToString here so we only go through 1 single render and don't execute the useEffect callback
    const trueResult = renderToString(<TestComponent initialValue={true} />)
    const falseResult = renderToString(<TestComponent initialValue={false} />)

    expect(trueResult).toContain("mounted")
    expect(falseResult).toContain("not mounted")
  })

  it("should flip when `initialValue` is false and ready in DOM", () => {
    const { result } = renderHook(useIsMounted, {
      initialProps: false,
    })

    expect(result.current.current).toBe(true)
  })

  it.each([true, false])(
    "should return false when unmounted",
    (initialValue) => {
      const { result, unmount } = renderHook(useIsMounted, {
        initialProps: initialValue,
      })

      expect(result.current.current).toBe(true)

      unmount()
      expect(result.current.current).toBe(false)
    },
  )
})
