import NumSelect from './NumSelect.vue'

describe('<NumSelect />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(NumSelect)
  })
})