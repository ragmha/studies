# Redux Flow

## Action

```javascript
{ type: RATE_COURSE, rating: 5 }
```

## Reducers (Handles the Action)

```javascript
function appReducer(state=defaultState, action) {
    switch(action.type) {
        case RATE_COURSE:   
            // return new state
    }
}
```

## React (Notified via React-Redux)