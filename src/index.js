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

state.name = 'alwynzhou'
state.age++
state.info.job = 'FE teacher'
state.info.students.push({
  id: 3,
  name: 'xiaoli'
})
state.hobby.push('sleep')

console.log(state)
