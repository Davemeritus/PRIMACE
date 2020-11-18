import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return(
   <Layout>
         <h1>Primace</h1>
      <p>Need a top notch Agency? <Link to= "/contact">Contact Us</Link> </p>
   </Layout>
  )
}

export default IndexPage