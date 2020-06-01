import React from 'react'
import { SearchHeader } from '../../components/Header/SearchHeader'
import { Footer } from '../../components/Footer/Footer'
import s from './home.module.css'
import { ProductCard } from '../../components/Product/Card/ProductCard'
import { CategoryForm } from '../../components/Form/CategotyForm/CategoryForm'

export const HomeView = ({ products, fetchMore, isNextPage }) => {
  return (
    <div className={s.container}>
      <SearchHeader />
      <main className={s.main}>
        <CategoryForm />
        <div className={s.productContainer}>
          {products.map((product) => (
            <ProductCard key={product.id} {...{ product }} />
          ))}
        </div>
        {fetchMore && isNextPage ? (
          <button onClick={fetchMore} className={s.moreBtn}>
            More
          </button>
        ) : null}
      </main>
      <Footer />
    </div>
  )
}
