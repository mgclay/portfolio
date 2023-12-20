import Spritesheet from 'react-responsive-spritesheet'
import waving from '../sprites/waving.png'
import './Sprites.css'
const SpriteWave = () => {
    return(
        <div className='waving'>
        <Spritesheet
        className='waving'
        style={{maxWidth:'270px'}}
        image = {waving}
        widthFrame={270}
        heightFrame={270}
        step={5}
        fps={10}
        autoplay={true}
        loop={true}
        endAt={5}
        />
        </div>
        
    )
}

export default SpriteWave