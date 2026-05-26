import React from 'react'
import './Categories.css'
import cat_1 from '../Assets/category-1.png'
import cat_2 from '../Assets/category-2.png'
import cat_3 from '../Assets/category-3.png'

function Categories() {
    return (
        <div className='categories'>
            <h1>For every</h1>
            <h2>member of the family</h2>
            <div className="cat-container">
                <div className="cat-box">
                    <img src={cat_1} alt="" />
                        <div className="box-text">
                            <p>Collection</p>
                            <h3>For men</h3>
                            <span>148 items</span>
                            <button>View</button>
                        </div>
                </div>
                <div className="cat-box">
                    <img src={cat_2} alt="" />
                        <div className="box-text">
                            <p>Collection</p>
                            <h3>For women</h3>
                            <span>214 items</span>
                            <button>View</button>
                        </div>
                </div>
                <div className="cat-box">
                    <img src={cat_3} alt="" />
                        <div className="box-text">
                            <p>Collection</p>
                            <h3>For children</h3>
                            <span>96 items</span>
                            <button>View</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Categories