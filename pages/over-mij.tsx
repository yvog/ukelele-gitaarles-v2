import React from 'react'
import { AboutMe, ExploreSignup, HeaderNavigation, Layout, UspBar } from '../components'

export default function AboutMePage() {
  return (
    <Layout title="Over mij">
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <AboutMe />

      <div className="main-container">
        <UspBar />
      </div>

      <ExploreSignup />
    </Layout>
  )
}
