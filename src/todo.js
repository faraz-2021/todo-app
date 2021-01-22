import React, {useState} from 'react';

const data = [
    { text: 'abc', id: 1, check: false },
    { text: 'axyz', id: 2, check: true },
]


const Todo = () =>{
    const [text, setText] = useState('');
    const [list, setList] = useState(data);
    const [filter, setFilter] = useState([]);
  

    const textChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = e => {
        if (text) {
            setList((prevValue) => {
                return [
                    ...prevValue,
                    { text: text, check: false, id: Math.random().toString() }
                ]
            })
        }
       
        setText('');
        e.preventDefault();
    }
    const listCompleted = () => {
        setFilter(list)
       let listData = list.filter(item=>{
            if(item.check){
                return item
               }
        })
        
        setList(listData)
        console.log(listData)
      }

      const Active = ()=>{
        setFilter(list)
       let listData = list.filter(item=>{
            if(!item.check){
                return item
               }
        })
        
        setList(listData)
        console.log(listData)
      }

      const All = ()=>{
          setFilter(list)
        let listData = list.filter(item=>{
            if(item.check==false){
                return item
            }
           
        })

        setList(listData)
        console.log(listData)
      }

  
    const setCheck = (item) => {
        const newList = list.map(todo => {
            if (todo.id == item.id) {
                return { ...todo, check: !todo.check }
            } else {
                return { ...todo }
            }
        })
        setList(newList);
    }
  



    return(
        <div style={{color:"#4d4d4d",borderColor:""}}>
            <h1 style={{textAlign:"center",color:"orange"}}>todos</h1>
            <div style={{border:"1px solid black"}}>
            <form onSubmit={handleClick}>
            <input type="text" style={{width:"500px",height:"50px",border:"none",fontSize:"20px"}} value={text}  onChange={textChange} placeholder="what do we do next"/>
            {/* <button  type="submit">submit</button> */}
            </form>
            <div style={{}}>
                {list.map((item,id)=>(
                     <div style={{display:"flex",borderBottom:"1px solid black",width:"100%",height:"50px",alignItems:"center",fontSize:"20px"}} key={id}>
                           <input type="checkbox"  checked={item.check}
                            onChange={() => setCheck(item)}/>
                          {item.check ? <del>{item.text}</del>:<div>{item.text}</div>}
                    </div>
                ))}
                <div style={{display:"flex",justifyContent:"center",width:"100%",height:"35px",borderBottom:"1px solid black"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"95%",height:"30px",alignItems:"center",}}>
                    <label> { list.length}</label>
                    <div style={{display:"flex",justifyContent:"space-between",width:"35%"}}>
                    <div onClick={()=>(setList(filter))}><span>All</span></div>
                    <button onClick={Active}><span>Active</span></button>
                    <div onClick={listCompleted}><span>Completed</span></div>
                    </div>
                    <div onClick={All}><span>Clear completed</span></div>
                </div>
                </div>
               
                </div>
            </div>
          

            {/* <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>selected</div>
                <div>All</div>
                <button>Active</button>
                <div>completed</div>

            </div> */}
            {/* <h3>Todo App</h3>
            <div style={{border:"solid black",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div >
                <input type="checkbox" checked={check} onClick={()=>(setCheck(!check))}/>
                <div onClick={()=>(setCheck(!check))}>click me</div>
                <label> abc</label>
                </div>
                <div>
                {check ? "completed":null}
                </div>
            </div>
            <div style={{border:"solid black",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div >
                <input type="checkbox" checked={check2} onClick={()=>(setCheck2(!check2))}/>
                <div onClick={()=>(setCheck(!check))}>click me</div>
                <label> xyz</label>
                </div>
                <div>
                {check2 ? "completed":null}
                </div>
            </div>
            <br/>
            <button>Submit</button> */}
        </div>
    )
}

export default Todo;