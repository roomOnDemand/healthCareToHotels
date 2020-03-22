export const users = () => {
  return db.user.findMany()
}

export const createUser = ({ input }) => {
  return db.user.create({ data: input })
}
