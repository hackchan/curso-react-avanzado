import React from 'react'
import { Category } from '../Category'
import { List, Items } from './styles'
import db from '../../db/api.json'
export const ListOfCategories = () => {
  console.log(db)
  return (
    <List>
      {db.categories.map((category) => (
        <Items key={category.id}>
          <Category {...category} />
        </Items>
      ))}
    </List>
  )
}
