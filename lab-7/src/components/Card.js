export default function Card(props) {

    const data = props.data;

    const name = data.name;
    const favColor = data.favColor;
    const img = data.img;
    const url = data.url;

    return (
        <div class="card">
            <img src={img} class="card-img-top" alt="alt text"/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{favColor}</p>
                <a href={url} class="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    );
}