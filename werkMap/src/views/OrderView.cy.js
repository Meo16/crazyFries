import OrderView from './OrderView.vue'

describe('<OrderView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(OrderView)
  })
})