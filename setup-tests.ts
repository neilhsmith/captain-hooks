import {
  cleanup,
  queries,
  Queries,
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from "@testing-library/react"

declare global {
  function renderHook<
    Result,
    Props,
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement,
    BaseElement extends Element | DocumentFragment = Container,
  >(
    render: (initialProps: Props) => Result,
    options?: RenderHookOptions<Props, Q, Container, BaseElement>,
  ): RenderHookResult<Result, Props>
}

if (!globalThis.renderHook) {
  globalThis.renderHook = renderHook
}

afterEach(() => {
  cleanup()
})
