import "./ContentSection.css";

function ContentSection() {

  const handleDownloadCV = () => {
    const fileURL = '/Rachaphol-Resume.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = fileURL;
    downloadLink.download = 'Rachaphol-Resume.pdf'; 
    document.body.appendChild(downloadLink)
    downloadLink.click();
    document.body.removeChild(downloadLink);
     };

  return (
    <div className="contentSection">
      {/* Left Box */}
      <div className="contentLeftbox">
        <div>Hi!</div>
          <div className="subtext"> I am  Rachaphol Plookaom </div>
          Web Developer 
        <div className="maintext"> I am passionate about applying my analytical skills and <br></br>attention to detail to ensure the quality and functionality of software products. </div>
        <div>
          <div className="socialBox"><div className="socialText"> Follow me </div><div className="seperator"></div> <img src="/socialMedia.svg" alt="socialMedia" /> </div>
        </div>
        <div className="buttonBox">
          <button>Send Request</button>
          <button onClick={handleDownloadCV}>Download CV</button>
        </div>
      </div>

      {/* Right Box */}
      <div className="contentRightbox">
        <div>
          <img src="/heroImg.svg" alt="heroImage"/>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;