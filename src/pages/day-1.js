import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./day-1.module.css"
import Blogimage from "../components/blogimage";

const DayOnePage = () => {
  return (
    <Layout>
      <SEO
        title="Tag 1"
        description="Kommen Sie zu unseren Events!"
        image="/logo.png"
        pathname="/"
        // Boolscher Wert, ob article:
        // article
      />
      <section className={style.wrapper}>
        <h1 className={style.heading}>Tag 1</h1>
        <div>
            <p>
                Nach dem öffnen der Transportboxen, erste inspection der neuen Heimat.
            </p>
            <Blogimage src={"/images/bad_2021-01-30.jpeg"} alt={"Tag 1: Bad"} />
        </div>
      </section>
    </Layout>
  )
}

export default DayOnePage
