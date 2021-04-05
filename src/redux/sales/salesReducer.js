import {GET_SALE} from './salesTypes'
import data from './data.json'
import {Server} from "miragejs"

/*
console.log(data)
new Server({
    routes(){
        this.namespace="/api";
        this.get("/salesData/",()=>{
            return data
        });
    }
});

const initState= ()=>{fetch("/api/salesData")
.then(response=>{
if(!response.ok) throw Error(response.statusText);
return response.json;
})
.then(json=>buildList(json))}

function buildList(data1){console.log(data1)}
*/


const initialState=data[0]
//console.log(initialState)


const salesReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_SALE: return state
        default: return state
    }
}

export default salesReducer;