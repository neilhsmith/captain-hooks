import {
  cleanup,
  queries,
  Queries,
  render,
  renderHook,
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
  RenderResult,
} from "@testing-library/react"

declare global {
  function render<
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement,
    BaseElement extends Element | DocumentFragment = Container,
  >(
    ui: React.ReactElement,
    options: RenderOptions<Q, Container, BaseElement>,
  ): RenderResult<Q, Container, BaseElement>
  function render(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "queries">,
  ): RenderResult

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

if (!globalThis.render) {
  globalThis.render = render
}
if (!globalThis.renderHook) {
  globalThis.renderHook = renderHook
}

afterEach(() => {
  cleanup()
})
