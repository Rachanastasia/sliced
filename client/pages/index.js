import Screen from '../components/Screen'
import About from '../components/About'
import Slicer from '../components/Slicer/index'


export default function Home() {
  return <Screen><Page /></Screen>
}

function Page(){
  return (
      <div className='screen_content'>
          <About />
          <Slicer />
      </div>
  )
}
