import { useEffect, useMemo, useRef } from "react"

/**
 * There's disagreement on how a `useIsMounted` hook should behave. Some believe its initial value should be `true` to
 * represent it being mounted during SSR. Others prefer `false` so that they can detect when a component is actually ready in
 * the browser in a `useEffect` callback.
 *
 * This hook does both using the `initialValue`. Pass `true` so it is treated as mounted during SSR and hydration and only
 * flips to false when unmounted. Otherwise pass `false` and it will flip to `true` when actually rendered in the client
 * as well as flipping back to `false` when unmounted.
 *
 * But either way, this hook should flip to `false` when a component is unmounted so it can be used to avoid setting state at
 * the end of an async action after a component has been unmounted.
 *
 * @param initialValue - Whether or not the component should be considered mounted immediately or only once it's rendered on
 * the client. Defaults to `true`.
 * @returns Ref containing the current boolean representing if the component is mounted or not.
 */
const useIsMounted = (initialValue = true) => {
  const ref = useRef(initialValue)

  useEffect(() => {
    ref.current = true
    return () => {
      ref.current = false
    }
  }, [])

  return ref
}

export default useIsMounted
