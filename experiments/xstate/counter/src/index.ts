import { createMachine, interpret, assign } from 'xstate'

// The context (extended state) of the machine
type CounterContext = {
  count: number
}

// The events that the machine handles
type CounterEvent = { type: 'INCREMENT' } | { type: 'DECREMENT' }

type CounterTypeState = {
  value: 'active'
  context: CounterContext
}

// Actions
const increment = (context: CounterContext) => context.count + 1
const decrement = (context: CounterContext) => context.count - 1

// Guards
const isNotMax = (context: CounterContext) => context.count < 10
const isNotMin = (context: CounterContext) => context.count >= 0

const counterMachine = createMachine<
  CounterContext,
  CounterEvent,
  CounterTypeState
>({
  initial: 'active',
  context: {
    count: 0
  },
  states: {
    active: {
      on: {
        INCREMENT: { actions: assign({ count: increment }), cond: isNotMax },
        DECREMENT: { actions: assign({ count: decrement }), cond: isNotMin }
      }
    }
  }
})

const counterService = interpret(counterMachine)
  .onTransition((state) => console.log(state.context.count))
  .start() // => 0

for (let i = 0; i < 10; i++) {
  counterService.send('INCREMENT')
} // =>  1...10

console.log('----------')

counterService.send('INCREMENT') // => 10 No Transition taken!

console.log('----------')

for (let i = 10; i >= 1; i--) {
  counterService.send('DECREMENT')
} // =>  1...10
