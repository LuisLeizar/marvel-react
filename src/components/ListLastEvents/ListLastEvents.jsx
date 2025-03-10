import { Card, Header } from "semantic-ui-react"
import "./ListLastEvents.scss"
import Container from "../Container"
import useFetch from "../../hooks/useFetch"
import LastEvent from "../LastEvents";

export default function ListLastEvents() {
    let _URL = `${import.meta.env.VITE_REACT_APP_URL_BASE}/events?ts=1&apikey=${import.meta.env.VITE_REACT_APP_API_KEY_MARVEL}&hash=${import.meta.env.VITE_REACT_APP_HASH_ID}&orderBy=startDate&limit=5`;
    const lastEventsFetch = useFetch(_URL);

    return (
        <div className="container-list-last-event">
            <Header size="large">Últimos eventos</Header>
            <Container bg="light">
                <Card.Group itemsPerRow={5}>
                    <LastEvent lastEventsFetch={lastEventsFetch} />
                </Card.Group>
            </Container>
        </div>
    )
};
