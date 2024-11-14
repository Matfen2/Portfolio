import "../Present/Present.scss";

function Present() {
  return (
    <div className="presentation">
      <h2 className="name">Mathieu FENOUIL</h2>
      <h2 className="job">Développeur Front-End</h2>
      <div className="dream">Passionné par le développement web, notamment la partie créative.</div>
      <button type="button" id="btnCV"><a href="/CV%20Mathieu%20FENOUIL.pdf"
      download="CV Mathieu FENOUIL" className="btn-cv">MON CV</a></button>
    </div>
  )
}

export default Present
