import { RefObject, useEffect } from "react"

/**
 * .
 *
 * @param value - the value to store
 * @returns the value stored last render
 * @example
 * ```tsx
 * const SomeComponent = () => {
 *   const ref = useRef()
 *   const [modalOpen, setModalOpen] = useState(false)
 *
 *   useOnClickOutside(ref, () => setModalOpen(false))
 *
 *   return <div>
 *     {modalOpen ? (<div ref={ref}>
 *       <span>modal open</span>
 *     </div>) : (
 *       <button onClick={() => setModalOpen(true)}>Open modal</button>
 *     )}
 *   </div>
 * }
 * ```
 */
const useOnClickOutside = <T extends HTMLElement>({
  ref,
  handler,
}: {
  ref: RefObject<T>
  handler: () => void
}) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) {
        handler()
      }
    }

    document.addEventListener("click", handleClick, true)

    return () => document.removeEventListener("click", handleClick, true)
  }, [ref, handler])
}

export default useOnClickOutside
