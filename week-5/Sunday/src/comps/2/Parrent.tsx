import { useRef } from "react"
import TextBox from "./TextBox"

export default function Parrent() {
    const inputRef = useRef<HTMLInputElement>(null)

        const showValue = () => {
            if (inputRef) {
                alert(inputRef.current?.value)
            }
        }
  return (
    <div>
        <TextBox ref={inputRef}/>
        <button onClick={showValue}>Show Value</button>
    </div>
  )
}
