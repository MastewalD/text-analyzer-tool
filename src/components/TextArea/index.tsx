import './index.scss'
import App from '../../App'
import React , { useState,useEffect,useRef } from 'react'

const TextArea = ({ setText }: { setText: Function }) => {
  
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
ref.current?.focus()
    
  }, []);
  return(
    <div>
  <textarea className="text-area" placeholder="Paste your text here..." ref={ref}
 onChange={e=>setText(e.target.value)}/>
  
  </div>
  )
 

  
 

  
  

  
}

export default TextArea
