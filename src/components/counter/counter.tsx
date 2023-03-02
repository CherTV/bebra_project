import React, {useState} from 'react';

const Counter = () => {
    const[state,setState] = useState(3700985)
    const[currentN, setCurrenN]=useState('1')


    const OnClick = (value:number) =>{
        setState(state+value)
    }



    return (
        <div>


            <div>
                <input
                    type="text"
                    value={currentN}
                    onChange={(e)=>setCurrenN(e.target.value)}
                    />
            </div>



            <div>
               Численность детей в Ираке: {state} {currentN}
            </div>







            <button onClick={()=>OnClick(1)}>
                Пощадить
            </button>
            <button onClick={()=>OnClick(-1)}>
                Сломать колени
            </button>

            <button onClick={()=>OnClick(100)}>
                raise king
            </button>
            <button onClick={()=>OnClick(-100)}>
                cry about
            </button>

            <button onClick={()=>OnClick(parseInt(currentN))}>
                Заспавнить детей
            </button>


        </div>
    );
};

export default Counter;