import React, { useState } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import KartTaco from '../../Redux/img/6f7e2070-2017-48dc-86fa-f81f05c38d21.jpeg'
import { default as ChikinTaco } from '../../Redux/img/b4b1c524-603d-4a1f-9d37-3b2dbd740ed6.jpeg'
import DyvyxTaco from '../../Redux/img/df2f5a6b-a5d6-4cc6-8bae-1fdac03ac144.jpeg'
import Xryctaco from '../../Redux/img/efc82022-fd8b-4280-8901-188e52c0d2af.jpeg'
import './style.scss'
function ImageChanger() {
	const photo = {
		el: [ChikinTaco, Xryctaco, KartTaco, DyvyxTaco],
	}

	const [curImg, setCurrImg] = useState(0)
	const handleClickPrev = () => {
		setCurrImg(curImg > 1 ? curImg - 1 : photo.el.length - 1)
	}

	console.log('curImg', curImg, 'length ', photo.el.length)

	const handleClickNext = () => {
		setCurrImg(curImg < photo.el.length - 1 ? curImg + 1 : 0)
	}

	const handleHoverChanger = e => {
		setCurrImg(e)
	}
	return (
		<div className='container'>
			<div className='row'>
				<div className='image--changer'>
					<div className='image--changer__main'>
						<img src={photo.el[curImg]} alt='' />

						<button
							className='btnPrev btn btn-secondary '
							onClick={handleClickPrev}
						>
							prev
						</button>
						<button
							className='btnNext btn btn-success'
							onClick={handleClickNext}
						>
							next
						</button>
					</div>

					<div className='image--container column-4'>
						{photo.el.map((el, idx) => (
							<div className='images--item'>
								<img
									onMouseOver={e => {
										handleHoverChanger(idx)
									}}
									src={el}
									alt=''
									key={el.id}
									style={{
										border: curImg === idx ? '2px solid red' : 'none',
									}}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImageChanger
