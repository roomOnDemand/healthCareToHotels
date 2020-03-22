export const spaces = () => {
  return db.space.findMany()
}

export const space = ({ id }) => {
  return db.space.findOne({
    where: { id },
  })
}

export const createSpace = ({ input }) => {
  return db.space.create({
    data: input,
  })
}

export const updateSpace = ({ id, input }) => {
  return db.space.update({
    data: input,
    where: { id },
  })
}

export const deleteSpace = ({ id }) => {
  return db.space.delete({
    where: { id },
  })
}
