import CartOrderView from './CartOrderView.vue'

describe('<CartOrderView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CartOrderView)
  })
})