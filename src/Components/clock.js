import { useState, useEffect } from "react";

var DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(()=>setDate(new Date()), 1000)

    return function clearup() {
      clearInterval(timer)
    }
  });

  return (
    <div id="clock"> 
      <p>Time : {date.toLocaleTimeString()}</p>
      <p>Date : {date.toLocaleDateString()}</p>
    </div>
  )
}

export default DateTime