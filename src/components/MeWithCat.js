import './Sprites.css'
import Spritesheet from 'react-responsive-spritesheet'
import me from '../images/me_sprite_scaled.png'
import orange from '../sprites/orange_heart.png'

import orange_gif from '../sprites/orange_happy_gif.gif'
const MeWithCat = () => {
    return(
        <div className='standing'>

            <img src = {me}></img>
            <img src = {orange_gif} className='cat'></img>
            {/* <Spritesheet
            className='waving'
            image={orange}
            widthFrame={255}
            heightFrame={350}
            steps={2}
            fps={10}
            autoplay={true}
            loop={true}
            endAt={2}
            ></Spritesheet> */}
        </div>
    )
}

export default MeWithCat