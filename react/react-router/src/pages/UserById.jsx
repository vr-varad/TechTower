import React from 'react'
import { useParams } from 'react-router-dom'

const UserById = () => {
  const id = useParams().id
  return (
    <div>This is user {id}</div>
  )
}

export default UserById