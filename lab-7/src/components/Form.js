export default function Form(props) {

    const PROFS = props.data;

    const profsChecks = PROFS.flatMap((profElem) => [
        <input type="checkbox" id={profElem.course + "_" + profElem.netId} name={profElem.course + "_" + profElem.netId} key={profElem.course + "_" + profElem.netId + "_input"} value={profElem.course + " with " + profElem.netId} required={profElem.isRequired}/>,
        <label for={profElem.course + "_" + profElem.netId}>{profElem.course + " with " + profElem.name}</label>,
        <br/>
    ])

    return (
        <form>
            {profsChecks}
            <input type="submit" value="Submit"/>
        </form>
    )
}