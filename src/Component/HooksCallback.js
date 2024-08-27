import React, { useCallback, useMemo, useState } from 'react'
import PrintTable from './PrintTable';

export function HooksCallback() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);


    const styles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    const calculateTable=useCallback(()=>{
        return[number*1,number*2,number*3,number*4,number*5]
    },[number])
    
    //old method
    // const calculateTable=()=>{
    //     return[number*1,number*2,number*3,number*4,number*5]
    // }
    return (
        <div style={styles} >
            <input type='number' onChange={(v) => { setNumber(v.target.valueAsNumber) }} value={number}></input>
            <PrintTable calculateTable={calculateTable}></PrintTable>
            <button onClick={() => setDark(!dark)}>Change Color</button>
        </div>
    )
 
}

