export const userNameFormat = (fullName) => {
  const [name = ' ', surname = ' '] = fullName.split(' ')

  return name[0] + surname[0]
}
