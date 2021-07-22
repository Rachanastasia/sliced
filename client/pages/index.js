import Screen from '../components/Screen'
import About from '../components/About'
import AboutSliced from '../components/AboutSliced'
import Slicer from '../components/Slicer/index'


export default function Home() {
  return <Screen><Page /></Screen>
}

//FOR TESTING
//FIND A PLACE FOR THE MAIN SCREEN
function Page(){
  return (
    <>
      <div className='screen_content'>
          <AboutSliced />
          
          <About />
          <Slicer />
        </div>
    </>
  )
}
