import './App.css'
// import "@mantine/core/styles.css"
import Mainmodal from './components/MainModal/Mainmodal'




function App() {

  const currentDate = new Date().toDateString()
  console.log(currentDate);

  

  return (
    <>
    <div className='content'>
      <Mainmodal/>
      <div className='section2'>
         <div className='maintitle'>
          <h2>Bugünün Statistikası</h2>
          <p>{currentDate}</p>
         </div>
         <div className='card'>
          <div className='title'>
            <h4>Gəlir</h4>
            <p className='subtitle'>Bugün</p>
          </div>
          <hr style={{color:"gray"}} />
          <div className='price'>
            <h1>$9400</h1>
            <p >1.5%</p>   {/* color red and green */}
          </div>
          <div>
            <p>Dünən olan gəlir:123$</p>
            <h4>Keçən həftənin gəliri:1232$</h4>
          </div>
         
         </div>
         <div className='card'>
          <div className='title'>
            <h4>Xərc</h4>
            <p className='subtitle'>Bugün</p>
          </div>
          <hr style={{color:"gray"}} />
          <div className='price'>
            <h1>$9400</h1>
            <p >1.5%</p>   {/* color red and green */}
          </div>
          <div>
            <p>Dünən olan xərc:123$</p>
            <h4>Keçən həftənin xərc:1232$</h4>
          </div>
         
         </div>

      </div>
      <div className='section3'>salam</div>
    </div>
    </>
  )
}

export default App
