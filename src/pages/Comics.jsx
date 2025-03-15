import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import useFetch from "../hooks/useFetch";
import ListComics from "../components/ListComics";

export default function Comics() {
    const [ renderComics, setRenderComics] = useState(10);

    let _URL = `${import.meta.env.VITE_REACT_APP_URL_BASE}/comics?ts=1&apikey=${import.meta.env.VITE_REACT_APP_API_KEY_MARVEL}&hash=${import.meta.env.VITE_REACT_APP_HASH_ID}&orderBy=focDate&limit=${renderComics}`;
    const listComics = useFetch(_URL);

    return (
        <div className="comics-page">
            <div id="slide-comics-image" />
            <Grid>
                <Grid.Column>
                    <Container bg="light">
                        <Header as="h2">Los mejores comics</Header>
                        <ListComics listComics={listComics} renderComics={renderComics} setRenderComics={setRenderComics} />
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    )
};
