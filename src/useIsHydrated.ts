import { useEffect, useState } from "react"

/**
 * Updates and returns a boolean indicating if a component has been hydrated already or not. Similar to `useIsMounted`
 * however this manages state to force a rerender when it hydrates. Useful when deferring rendering to avoid hydration
 * errors.
 *
 * @example
 * ```tsx
 * const SomeComponent = () => {
 *   const isHydrated = useIsHydrated()
 *
 *   return isHydrated
 *     ? <div>rendered only on the client after hydration</div>
 *     : <div>rendered in SSR and hydration</div>
 * }
 * ```
 *
 * @returns The boolean indicating the component has been hydrated already or not.
 */
export default function useIsHydrated() {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated
}
