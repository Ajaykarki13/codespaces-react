import './profile.css'
function Profile(props)
{ return(
    <div>
        <p>Starting React from here :)</p>
<h1>{props.name}<br/> {props.skill}</h1>
{props.obj.a}
    </div>
)
}
export default Profile