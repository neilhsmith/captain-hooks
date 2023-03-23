import { EffectCallback, useEffect } from "react"

/**
 * Shorthand for useEffect with an empty dependency array. The effect
 * will not run a 2nd time even if the given effect changes referentially.

 * @param effect - the effect which will run only one time
 */
export default function useEffectOnce(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
}
