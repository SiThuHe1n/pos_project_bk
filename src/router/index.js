import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/joker.vue'
import p_register from '../views/Product/p_register.vue'
import purchaseitem from '../views/Purchase/purchaseItem.vue'
import saleitem from '../views/Sale/saleItem.vue'
import supplier from '../views/Purchase/supplier.vue'


// purchase

import PurchaseHistory from '../views/Management/PurchaseHistory.vue'

import purchasedetail from '../views/Management/purchasedetail.vue'


//product control
import subcategory from '../views/Product/subcategory.vue'
import category from '../views/Product/category.vue'
import unittype from '../views/Product/unit.vue'
import brand from '../views/Product/brand.vue'
import productdetail from '../views/Product/productdetail.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },

  //product

  {
    path: '/productdetail',
    name: 'productdetail',
    component: productdetail
  },
  {
    path: '/PurchaseHistory',
    name: 'PurchaseHistory',
    component: PurchaseHistory
  },
  {
    path: '/purchasedetail',
    name: 'purchasedetail',
    component: purchasedetail
  },

  
  {
    path: '/subcategory',
    name: 'subcategory',
    component: subcategory
  },

  {
    path: '/category',
    name: 'category',
    component: category
  },

  {
    path: '/unittype',
    name: 'unittype',
    component: unittype
  },

  {
    path: '/brand',
    name: 'brand',
    component: brand
  },



    {
    path: '/supp_regist',
    name: 'supplier',
    component: supplier
  },
  {
    path: '/a',
    name: 'p_register',
    component: p_register
  },


  
  {
    path: '/saleitem',
    name: 'saleitem',
    component: saleitem
  },
  {
    path: '/',
    name: 'purchaseitem',
    component: purchaseitem
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
