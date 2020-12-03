import React from "react"
import Layout from "../components/layout"
const AdmitCard = () => (
  <Layout pageInfo={{ pageName: "M. Ed. Admit Card" }}>
  <center><form>
  <label>
    Form no:
    <input type="text" name="form-no" />
  </label>
  <input type="submit" value="Submit" formaction="" />
  </form>
  
</center>
  </Layout>
)

export default AdmitCard
