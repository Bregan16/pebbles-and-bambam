import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Startseite"
        description="SEO-Description anpassen"
        image="/logo.png"
        pathname="/"
        // Boolscher Wert, ob article:
        // article
      />
      <section className={style.wrapper}>
        <h1 className={style.heading}>Pebbels und Bambam.</h1>
        <div>
            <p>
                Geboren in freier Wildbahn, fanden sie und ihre Geschwister, schnell ihren Weg zum Bremer Tierschutzverein e.V. in der Hemmstrasse.
            </p>
            <p>
                Von dort haben wir sie zu und genommen.
            </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
