#### 

Example 4 of 5:

### Extracting providers to a component[](https://react.dev/reference/react/useContext#updating-data-passed-via-context#extracting-providers-to-a-component "Link for this heading")

As your app grows, it is expected that you’ll have a “pyramid” of contexts closer to the root of your app. There is nothing wrong with that. However, if you dislike the nesting aesthetically, you can extract the providers into a single component. In this example, `MyProviders` hides the “plumbing” and renders the children passed to it inside the necessary providers. Note that the `theme` and `setTheme` state is needed in `MyApp` itself, so `MyApp` still owns that piece of the state.