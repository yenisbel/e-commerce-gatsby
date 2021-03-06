import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>Hello friends</h1>
    <p>Welcome to my new e-commerce site with stripe checkout for payments.</p>
    <p>Let's go choose something great to wear.</p>
    <Checkout/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/advanced/">Go to popular apparel page</Link>
  </Layout>
)

export default IndexPage
