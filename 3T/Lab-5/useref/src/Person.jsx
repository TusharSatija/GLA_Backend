function Person(props)
{
    console.log(props);
    return(
        <>
            <h1> name : {props.name}</h1>
            <p> Age :  {props.age}</p>
            <article>Gender : {props.gender}</article>
        </>
    )
}
export default Person