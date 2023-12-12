export default function Parent()
{
    return(
        <div>
            <h1>Parent componant</h1>
            <Child res={1000}/>
        </div>
    )
}
function Child(props)
{
    return(
        <div>
            <h1>i scored {props.res} </h1>
            <Parent/>
        </div>
    )
}