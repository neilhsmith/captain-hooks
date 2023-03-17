import { useEffect, useRef } from "react"

/**
 * Stores a reference to a value from the previous render.
 *
 * @param value - the value to store
 * @returns the value stored last render
 * @example
 * ```tsx
 * const SomeComponent = () => {
 *  const [count, setCount] = useState(0)
 *  const prev = usePrevious(count)
 *
 *  return <div>
 *    <p>last render's count: {prev}</p>
 *    <p>this render's count: {count}</p>
 *    <button onClick={() => setCount(count + 1)}>Increment</button>
 *  </div>
 * }
 * ```
 */
const usePrevious = <T>(value: T): T => {
  const ref = useRef(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default usePrevious
