import moment from 'moment'

export const timeDuration = (time) => {
  const now = moment(new Date())
  const old = moment(time)

  const arr = [
    'years',
    'months',
    'weeks',
    'days',
    'hours',
    'minutes',
    'seconds',
  ]

  let result = ''

  for (let i = 0; i < arr.length; i++) {
    let dif = now.diff(old, arr[i])
    if (dif >= 1) {
      result = `${dif} ${arr[i]} ago`
      break
    }
  }

  return result
}
