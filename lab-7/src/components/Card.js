export default function Card(props) {

    const data = props.data;
    let style = props.style;
    const changeStyle = props.changeStyle;

    const name = data.name;
    const role = data.role;
    const course = data.course;
    const img = data.img;
    const netId = data.netId;


    return (
        <div className={"card " + style} title="Details of {course}">
            <img src={img} className="card-img-top" alt={"Headshot of" + name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{role}</p>
                <p className="card-text">{course}</p>
                <a href={"https://ischool.uw.edu/people/faculty/profile/"+netId} className="btn btn-primary">View on iSchool</a>
                <button onClick={changeStyle} className="btn btn-warning">Change Color!</button>

            </div>
        </div>


    );
}