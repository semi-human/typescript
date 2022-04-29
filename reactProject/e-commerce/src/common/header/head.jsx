import React from 'react'


export const Head = () => {
  return (
    <div>
        <section className='head py-3 text-white bg-[#0f3460]'>
            <div className='container m-auto flex justify-between'>
                <div className='left row'>
                    <i className='fa fa-phone mr-3'></i>
                    <label>+8801231243</label>
                    <i className='fa fa-envelope mr-3'></i>
                    <label>example@gmail.com</label>
                </div>

                <div className='right row text-right'>
                    <label>Theme FAQ's</label>
                    <label>Need Helps</label>
                    <span>🎌</span>
                    <label>EN</label>
                    <span>🎌</span>
                    <label>USA</label>
                </div>
            </div>   

            
        </section> 
        
    </div>
  )
}
