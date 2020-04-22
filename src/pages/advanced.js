import React from "react"
import { Link } from "gatsby"
import Cart from "../components/Cart"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Skus from "../components/Products/Skus"

const AdvancedExamplePage = () => (
  <Layout>
    <SEO title="Advanced Example" />
    <h1>This is the popular apparel for casual events</h1>
    <Cart>
      <Skus />
    </Cart>
    <Link to="/">Go back to the full catalog</Link>
  </Layout>
)

export default AdvancedExamplePage