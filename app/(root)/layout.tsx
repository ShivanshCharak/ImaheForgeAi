import React from 'react'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='root'>
        <div className='root-container'>
            <div className="wrapper">
                {children}
            </div>
        </div>

    </div>
  )
}

export default Layout
