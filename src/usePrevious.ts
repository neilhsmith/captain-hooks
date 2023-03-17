import { useEffect, useRef } from "react"

/**
 * Stores a reference to a value from the previous render.
 *
 * @param value - the value to store
 * @returns the value stored last render
 */
export const usePrevious = <T>(value: T): T => {
  const ref = useRef(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
