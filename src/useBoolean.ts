import { useMemo, useState } from "react"
import type { StateConstructor } from "./types/state-constructor"

/**
 * A typical useBoolean implementation: provides a boolean state and memoized setters to update it.
 *
 * @param initializer - boolean or function which returns a boolean
 * @returns the current state and setter fns
 * @example
 * ```tsx
 * const SomeComponent = () => {
 *  const [toggled, handlers] = useBoolean(false)
 *
 *  return <div>
 *    <button onClick={handlers.toggle}>Toggle</button>
 *    <button onClick={handlers.on}>On</button>
 *    <button onClick={() => handlers.set(false)}>Off</button>
 *    {toggled && <button onClick={handlers.off}>Off</button>
 *  </div>
 * }
 * ```
 */
const useBoolean = (initializer: StateConstructor<boolean> = false) => {
  const [boolean, setBoolean] = useState(initializer)

  const setters = useMemo(
    () => ({
      set: (newVal: boolean) => setBoolean(newVal),
      on: () => setBoolean(true),
      off: () => setBoolean(false),
      toggle: () => setBoolean((curr) => !curr),
    }),
    [],
  )

  return [boolean, setters] as const
}

export default useBoolean
