# Connecting React with Redux

    Store - React
<---react-redux--->

## Provider (Attaches app to store)
> Wraps the top level component (Provider)
    * Makes store available across all components
    * Utilizes React.context (carefully used by library authors)
    * You don't need to indivually pass

```javascript
<Provider store={this.props.store}>
    <App />
</Provider>
```


## Connect (Creates container components)
> Wraps our component so it's connected to the Redux store

```javascript
export default connect(mapStateToProps, mapDispatchToProps)(Component)
```

* mapStateToProps - exposing the state to the components
* mapDispatchToProps - exposing the action to the components

## Benifits
1. No manual unsubscribe
2. No lifecycle methods required
3. Declare what subset of state you want to expose
4. Enhanced perfomance for free (only specific data renders with connect)


## Compared to Flux (Boilerplate code) (Not required)
```javascript
componentWillMount() {
    Component.addChangeListener(this.onChange)
}
componentWillUnMount() {
    Component.removeChangeListener(this.onChange)
}

// Also you need a change handler
onChange() {
    this.setState({ authors: AuthorState.getAll() })
}
```
