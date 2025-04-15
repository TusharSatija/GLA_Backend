import './Student.css'
function Student(props)
{
    return(
        <>
        <div className="conatiner"> 
            <h1>name : {props.name}</h1>
            <h1>age : {props.age}</h1>
        </div>
        </>
    )
}
export default Student;