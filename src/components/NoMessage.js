import {Heading, Wrapper, Button} from "../UI/helpers";


const NoMessage = (props) => {

    return (
        <Wrapper minHeight>
            <Heading>No message scheduled</Heading>
            <Button type="primary" onClick={props.showForm}>Add Message</Button>
        </Wrapper>
    )
}

export default NoMessage