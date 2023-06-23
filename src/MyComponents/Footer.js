import React from 'react'

export const Footer = () => {
  let footerStyle = { 
        position: "relative",
    top: "10vh",
    width: "100%",
    backgroundColor: 'teal',
  }
  return (
    <footer className='text-light py-3'style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodolist.org
      </p>
      
    </footer>
  )
}
