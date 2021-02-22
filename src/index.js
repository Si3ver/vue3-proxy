import { reactive } from '@vue/reactivity'

const state = reactive({
  name: 'alwyn',
  age: 26,
  info: {
    job: 'teacher',
    students: [
      {
        id: 1,
        name: 'william',
      },
      {
        id: 2,
        name: 'dragon',
      },
    ]
  },
  hobby: ['film', 'coding', 'piano']
})

console.log(state)
