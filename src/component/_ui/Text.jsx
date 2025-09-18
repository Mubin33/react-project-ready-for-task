import React from "react"
import { cn } from "../../lib/utils"
// import { cn } from "@/lib/utils"  

const Paragraph = ({ word, className }) => {
  return (
    <p
      className={cn(
        "text-base font-normal text-gray-400", 
        className  
      )}
    >
      {word}
    </p>
  )
}

export default Paragraph
