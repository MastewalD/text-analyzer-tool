import { truncate } from 'fs'
import './index.scss'

const BottomResultBox = ({text}: { text: string }) => {
let w=text.split(/\s */g)
let word=text.split(/\s */g).length
let min=word/225 
console.log(min)
let Min=Math.trunc(min)
let rem=min-Min
if(rem>=0.3){
  Min +=1
}


let longestWord=''
for (let i  in w){
  
  if(w[i].length >longestWord.length){
    longestWord=w[i]
  }
}




  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: Min,
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
