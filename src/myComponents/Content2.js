import React from 'react'

export const Content2 = () => {
    let contentStyle = {
        minHeight: "100vh",
    }
    return (
        <>
            <div className="container" style={contentStyle}>
                <div className="row">
                    <div className="col-12 col-sm-10" >
                        <p className="h3" align="left" style={{color:"white"}}>Trendles is all about Social</p>
                        <p align="left" className='mt-3' style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, inventore aspernatur perspiciatis earum id iusto dolore fuga eum expedita. Saepe eos ducimus ratione, doloribus provident error voluptatibus, eaque mollitia, architecto obcaecati quidem odit debitis.</p>
                    </div>    
                    <div className="col-0 col-sm-3"></div>    

                </div>
            </div>

        </>
    )
}
