# A chat with Redux

## React
> Hey CourseAction, someone clicked this "Save Course" button

## Action
> Thanks React! I will dispatch an action so reducers that care can update state

## Reducer
> Ah, thanks action. I see you passed me the current state and the action to perform. Ill make a new copy of the state and return it

## Store
> Thanks for updating the state reducer. I'll make sure that all connected components are aware

## React-Redux
> Woah, thanks for the new data Mr.Store. I'll now intelligently determine if I should tell react about this change so that it only has to bother with updating the UI when necessary

## React
> Ooo! Shiny new data has been passed down via props from the store. I'll update the UI to reflect this!

## Summary

## React-Redux
- Provider
- Connect
    * mapStateToProps
    * mapDispatchToProps