import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'

export default async (root, { accessToken }, { db }) => {
  const verifiedJWT = await jwt.verify(accessToken, process.env.JWT_SECRET)
  if (verifiedJWT) {
    const user = await db
      .collection('users')
      .findOne({ _id: new ObjectId(verifiedJWT.userId) })
    return user
  } else {
    throw new Error('Must be logged in')
  }
}
