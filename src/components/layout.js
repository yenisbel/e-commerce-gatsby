/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import stripeLogo from '../images/powered_by_stripe.svg'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link
          to={`/about/`}
          css={css`
            float: right;
            padding-right: 10px;
          `}
        >
          About
        </Link>
  
        <Link
          to={`/contact/`}
          css={css`
            float: right;
            padding-right: 10px;
          `}
        >
          Contact
        </Link>
      </div>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <div>
            © {new Date().getFullYear()}, Built by <a href="https://yenisbel.com">Yenisbel</a>{` `}
            with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <div>
            <a href="https://stripe.com">
              <img src={stripeLogo} alt="Payments powered by Stripe" />
            </a>
          </div>
          
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
