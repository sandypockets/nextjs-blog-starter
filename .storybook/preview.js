import '../styles/global.css'

// v7-style sort
function storySort(a, b) {
  return a.title === b.title
    ? 0
    : a.id.localeCompare(b.id, undefined, { numeric: true })
}

export const parameters = {
  actions: {
    // Remove argTypesRegex
    // argTypesRegex: '^on[A-Z].*',
    // Add explicit actions using the fn function if necessary
    // fn: 'The function to call',
    // Add other action configurations as needed
    // disabled: true, // If you want to disable the actions addon
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a.title === b.title
        ? 0
        : a.id.localeCompare(b.id, undefined, { numeric: true }),
  },
}
