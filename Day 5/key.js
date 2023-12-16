export default function Listt()
{
const animals=["dog","cat","cow"]
const result=animals.map((ani,index)=><li key={index}>{index}=> {ani}</li>)
return(
    <div>
        <ul type="none">
            {result}
        </ul>
</div>
)
}