import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react'
import { FC } from 'react'
import Results from "interfaces/characters";

interface Props {
    character: Results
}

const CharacterCard: FC<Props> = ({ character }) => {
    return (
        <Grid xs={6} sm={3} md={3} xl={2} justify="center">
            <Card css={{ w: "90%", h: "320px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={`${character.thumbnail.path.concat("." + character.thumbnail.extension)}`}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Card example background"
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Text color="#000" size={14} style={{ whiteSpace: "nowrap" }}>
                                {character.name}
                            </Text>
                            <Text color="#000" size={12} >
                                Pendiente...
                            </Text>
                        </Col>
                        <Col>
                            <Row justify="flex-end">
                                <Button flat auto rounded color="secondary">
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        watch me
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}

export default CharacterCard
