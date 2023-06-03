import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div id= 'header' >
      <nav id='nav' style={{ backgroundColor: theme.backgroundColor, color: theme.color }} data-testid="toggle-theme-btn">
          <ul>
              <li><a className='active' href='#home'>Home</a></li>
              <li><a style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} href='#news'>News</a></li>
              <li><a style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }}href='#about'>About</a></li>
              <li><a style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} href='#contact'>Contact</a></li>
</ul>
          <div style={{position: 'relative', height: '46px'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
         
      </nav>
    </div>
  )
}
