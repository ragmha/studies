# React-Redux Connect

```javascript
connect(mapStateToProps, mapDispatchToProps)
```

## mapStateToProps
> What state should I expose as props?
- returns an object
- transform your state or filter

```javascript
function mapStateToProps(state) {
    return {
        appState: state
    }
}

// In my component 
this.props.appState
```

## mapDispatchToProps
> What actions do I want on props ?

```javascript
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

```

## 3 ways to Handle mapDispatchToProps

1. Ignore it. Use dispatch
```javascript
this.props.dispatch(loadCourses()) // In component
```

## Downsides
1. Boilerplate
2. Redux concerns in child components


2. Manually wrap
```javascript
function mapDispatchToProps(dispatch) {
    return {
      loadCourses: () => dispatch(loadCourses()),
      createCourse: (course) => dispatch(createCourse(course)),
      updateCourse: (course) => dispatch(updateCourse(course))
    }
}

// In component
this.props.loadCourses()
```
## Benifits
1. Child component doesn't have to know anything about redux, can call actions via props

## Downsides
1. Quite redunendant


3. Use bindActionCreators
```javascript
function mapDispatchToProps(dispatch) {
    return {
     actions: bindActionCreators(actions, dispatch)
    }
}

// In component
this.props.actions.loadCourses()
```
## Benifits
1. Child component doesn't have to know anything about redux , can call actions via props











## Reselect Library
* Memoize for performance (Caching for function calls)
* Avoid expensive performance (Filtering a list/ Maping..)
