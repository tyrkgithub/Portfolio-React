import TiaCV from "../../Assets/TiaCV.png";

const Download = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("TiaCV.png").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = { TiaCV };
        alink.download = "TiaCV.png";
        alink.click();
      });
    });
  };
  return (
    <a
      className="btn btn-outline-success justify-content-center"
      onClick={onButtonClick}
    >
      Download PNG
    </a>
  );
};

export default Download;
