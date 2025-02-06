import './App.css'

function BoxComponent({fullName, contentText, fillColor, width, height, borderColor, fontColor}) {
  return(
    <>
      <h1>{fullName}</h1>

      <div 
        style={{ 
          width           : width, 
          height          : height, 
          borderColor     : borderColor, 
          backgroundColor : fillColor,
          color           : fontColor,

          borderWidth     : "3px", 
          borderStyle     : "solid", 
          display         : "grid",
          placeItems      : "center"
        }}>

          <p>{contentText}</p>

      </div>
    </>
  )
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
        fontColor={"black"}>
      </BoxComponent>


      {/* <BoxComponent 
        fullName={'Juan Dela Cruz'}
        contentText={'C-PEITEL'} 
        fillColor={"green"} 
        width={"500px"} 
        height={"500px"} 
        borderColor={"red"}
        fontColor={"white"}>
      </BoxComponent>

      <BoxComponent 
        fullName={'Jake Batumkal'}
        contentText={'C-PEITEL'} 
        fillColor={"cyan"} 
        width={"500px"} 
        height={"250px"} 
        borderColor={"brown"}
        fontColor={"purple"}>
      </BoxComponent> */}
    </>

    // <section>
    //   <h1>Amazing scientists</h1>
    //   <Profile imageId={'YfeOqp2'} name={'Katsuko Saruhashi'}/>
    //   <Profile imageId={'OKS67lh'} name={'Aklilu Lemma'}/>
    //   <Profile imageId={'1bX5QH6'} name={'Lin Lanying'}/>
    // </section>

  )
}

// function getImageUrl(imageId) {
//   return (
//     'https://i.imgur.com/' +
//     imageId +
//     's' +
//     '.jpg'
//   );
// }

// function Profile({ imageId, name }) {
//   return (
//     <img
//       src={getImageUrl( imageId )}
//       alt={name}
//     />
//   );
// }

export default App;
