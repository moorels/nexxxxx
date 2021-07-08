import React,{useState,useEffect} from 'react'


function About() {

const [count,setCount] = useState(0)


useEffect(()=> {
    setTimeout (()=> {
        setCount(count + 1)
    },1000)
},[count])

    return (
        <div>
            <button onClick={() => setCount(count +1)}>Click To Increase Count</button>
            <p>
                {count}
            </p>
        </div>
    )
}

export default About
