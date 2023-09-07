import './index.scss'
import { pronouns } from '../../data/pronouns'
import { useEffect, useState } from 'react'

const ResultBox = ({text}: { text: string }) => {
  
 

  let char=text.split('').length
  let wor=text.split(/\s */g)
  let word=text.split(/\s */g).length -1
    

  let sentence =text.split(/[.?!]/gi).length-1
  let paragraph=text.split(/\n\n/g).length-1
let count=0
for (let i in wor){
  console.log(pronouns[i])
  if(pronouns.includes(wor[i])){
    count +=1
  }
  
}
 

  
    
   
    


  

  const resultBar = [
    {
      title: 'Words',
      value: word,
    },
    {
      title: 'Characters',
      value: char,
    },
    {
      title: 'Sentences',
      value: sentence,
    },
    {
      title: 'Paragraphs ',
      value: paragraph,
    },
    {
      title: 'Pronouns',
      value: count,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
