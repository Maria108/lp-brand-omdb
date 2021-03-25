import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

function getSW() {
  //getting field value
  let movieT = document.getElementById("movieT").value
  //the fetch API
  fetch("http://www.omdbapi.com/?t=" + movieT + "&apikey=7a752227")
    .then(function (response) {
      //when things go correctly the first function will trigger
      console.log(response)
      return response.json()
    })
    .then(function (myJson) {
      console.log("Stringify: " + JSON.stringify(myJson))
      ourDOMManipulation(myJson)
    })
    .catch(error => {
      console.log(error)
    })
}

function ourDOMManipulation(ourJSON) {
  document.getElementById("movieTitle").innerText = ourJSON.Title
  document.getElementById("movieYear").innerText = ourJSON.Year
}

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
      <title>My Awesome Website</title>
    </Helmet>

    <p>Please choose your movie.</p>
    <div className="well">
      <input
        type="text"
        id="movieT"
        placeholder="Enter movie Title"
        className="form-control"
      />
      <input
        type="submit"
        value="Get movie Info"
        id="movieSubmit"
        className="form-control btn btn-primary"
        onClick={getSW}
      />
    </div>
    <div className="well">
      <div className="text-center">
        <p id="movieTitle"></p>
        <p id="movieYear"></p>
      </div>
    </div>

    <StaticImage
      src="../images/film.jpeg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Movie"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
