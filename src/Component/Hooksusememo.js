import React, { useMemo, useState } from 'react'

export function Hooksusememo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const memocal=useMemo(()=>{
        return expensiveFunction(number);
    },[number])
    const styles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    const calculation = expensiveFunction(number)
    return (
        <div style={styles} >
            <input type='number' onChange={(v) => { setNumber(v.target.valueAsNumber) }}></input>
            <h2>{number}</h2>
            <h2>Calcuation: {calculation}  and calculation:{memocal}</h2>
            <button onClick={() => setDark(!dark)}>Change Color</button>
        </div>
    )
}

export default Hooksusememo
function expensiveFunction(num) {
    console.log("loop executed");
    for (let i = 0; i < 100000; i++) {

    }
    return num;
}
