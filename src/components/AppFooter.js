import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://wwtcss.com" target="_blank" rel="noopener noreferrer">
          Cellular Spot Survey by WWT
        </a>
      </div>
      <div className="ms-auto">
        <span className="ms-1">&copy; 2022 World Wide Technology</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
