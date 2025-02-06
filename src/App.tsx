import './App.css'

interface BoxComponentProps {
  fullName      : string;
  contentText   : string;
  fillColor     : string;
  width         : string;
  height        : string;
  borderColor   : string;
  fontColor     : string;
}

function BoxComponent({
  fullName,
  contentText,
  fillColor,
  width,
  height,
  borderColor,
  fontColor
}: BoxComponentProps) {
  return (
    <>
      <h1>{fullName}</h1>

      <div 
        style={{ 
          width: width, 
          height: height, 
          borderColor: borderColor, 
          backgroundColor: fillColor,
          color: fontColor,

          borderWidth: "3px", 
          borderStyle: "solid", 
          display: "grid",
          placeItems: "center"
        }}>
          <p>{contentText}</p>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <BoxComponent 
        fullName={'Kristenz Mingoy'}
        contentText={'CPEITEL'} 
        fillColor={"pink"} 
        width={"250px"} 
        height={"250px"} 
        borderColor={"black"}
        fontColor={"black"} 
      />
    </>
  );
}

export default App;
