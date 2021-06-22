import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./about.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="Infos über diese Site"
        description="Informationen über diese Site"
        image="/logo.png"
        pathname="/"
        // Boolscher Wert, ob article:
        // article
      />
        <section className={style.wrapper}>
            <h1 className={style.heading}>Über diese Site</h1>
            <div>
                <p>More to come.</p>
            </div>
      </section>
    </Layout>
  )
}

export default AboutPage
