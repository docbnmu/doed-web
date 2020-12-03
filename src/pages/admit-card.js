import React from "react"
import Layout from "../components/layout"
const AdmitCard = () => (
  <Layout pageInfo={{ pageName: "M. Ed. Admit Card" }}>
  <form>
  <label>
    Form no:
    <input type="text" name="form-no" />
  </label>
  <input type="submit" value="Submit" />
  </form>

  </Layout>
)

export default AdmitCard
