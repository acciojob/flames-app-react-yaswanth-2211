import React, {useState} from "react";
import '../styles/App.css';

const App=()=>{
    const[name1,setName1]=useState('')
    const[name2,setName2]=useState('')
    const[relation,setRelation]=useState('')
    let relations=["Friends","Love","Affection","Marriage","Enemy","Siblings"]
    const calculate=()=>{
        setRelation(findR(name1,name2));
    }
    const findR =()=>{
        let map =new Map();
        let n=name1.length;
        let m=name2.length;
        for(let i=0;i<n;i++){
            let char=name1[i];
            if(map[i]){
                map[i]++;
            }
            else{
                map[char]=1;
            }
        }
        let common=0;
        for(let i=0;i<m;i++){
            let char=name2[i];
            if(map[i]){
                map[i]--;
                common++
            }
        }
        return(relations[((n+m-(2*common)-1)%6)]);
    }
    const clear=()=>{
        setName1("");
        setName2("");
        setRelation("");
    }
        return(
            <div id="main">
               <input name="name1" value={name1} onChange={(e)=>setName1(e.target.value)} data-testid="input1"/>
               <input name="name2" value={name2} onChange={(e)=>setName2(e.target.value)} data-testid="input2"/>
               <button onClick={calculate} data-testid="calculate_relationship">Calculate Relationship Future</button>
               <button onClick={clear} data-testid="clear">Clear</button>
               <h3 data-testid="answer">{relation}</h3>
            </div>
        )
    }
export default App;
