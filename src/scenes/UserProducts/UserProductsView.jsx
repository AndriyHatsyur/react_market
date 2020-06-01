import React from 'react'
import s from './userProducts.module.css'
import { SearchHeader } from '../../components/Header/SearchHeader'
import { Footer } from '../../components/Footer/Footer'
import { UserInfoView } from './components/UserInfo/UserInfoView'
import { UserProductList } from './components/UserprProductsList/UserProductsList'

export const UserProductsView = ({ user, products }) => {
  if (!user) return <div>Loading...</div>
  return (
    <div className={s.container}>
      <SearchHeader />
      <main>
        <UserInfoView user={user} productsCount={products.length} />
        <UserProductList products={products} />
      </main>
      <Footer />
    </div>
  )
}
