export default function Card(props) {

    const data = props.data;

    const name = data.name;
    const role = data.role;
    const course = data.course;
    const img = data.img;
    const netId = data.netId;

    return (
        <div class="card">
            <img src={img} class="card-img-top" alt={"Headshot of" + name}/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{role}</p>
                <p class="card-text">{course}</p>
                <a href={"https://ischool.uw.edu/people/faculty/profile/"+netId} class="btn btn-primary">View on iSchool</a>
            </div>
        </div>


    );
}