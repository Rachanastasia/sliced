import Screen from '../components/layout'
import About from '../components/About'
import Slicer from '../components/Slicer/index'


export default function Home() {
  return <Screen showBanner><Page /></Screen>
}

function Page(){
  return (
      <div className='screen_content'>
          <About />
          <Slicer />
      </div>
  )
}
