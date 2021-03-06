import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text, Icon } from '../../components'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainImage: {
        maxHeight: '100%',
        maxWidth: 'auto',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
    gridItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "1em"
    },
    flex: {
        display: "flex",
        alignItems: 'center'
    },
    greyBox: {
        marginTop: "1em",
        backgroundColor: theme.palette.gray.main,
        borderRadius: '10px',
        padding: "1em"
    },
    item1: {
        order: 1,
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    },
    item2: {
        order: 2,
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    },
}))

const History = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title color="#2699b0" content="Notre histoire," size="h4" bold letterspacing="2px" />
                            <Title content="nos valeurs" size="h4" bold letterspacing="2px" />
                            <Title color="#b1b3b4" content="et nos missions" size="h4" bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Box mb={5}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={8}>
                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title color="#2699b0" content="Notre histoire" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2}>
                                    <Text size="body1" color="#000">
                                        L???association Mob???In France a ??t?? cr????e le 30 ao??t 2017, par d???anciens membres de l???<span style={{ color: "#2699b0", fontWeight: 'bold' }}>association FARE</span>.
                                <br />
                                        <br />
                                        FARE ??tait la <span style={{ color: "#2699b0", fontWeight: 'bold' }}>F??d??ration fran??aise des structures associatives de la mobilit??</span>, cr????e en 1988 par des ??ducateurs militants.
                                <br />
                                        <br />
                                        Fare est devenue peu ?? peu la f??d??ration nationale des associations et de professionnels afin de <span style={{ color: "#2699b0", fontWeight: 'bold' }}>favoriser l???acc??s ?? la mobilit?? pour tous</span>, en particulier les publics en difficult?? en f??d??rant les acteurs de la mobilit?? et en devenant un interlocuteur national.
                                <br />
                                        <br />
                                        Suite ?? sa disparition en octobre 2016, de nombreux acteurs sont rest??s r??unis autour de l???<span style={{ color: "#2699b0", fontWeight: 'bold' }}>id??e du r??seau</span>.
                                <br />
                                        <br />
                                        <span style={{ color: "#2699b0", fontWeight: 'bold' }}>Le r??seau Mob???In</span> a d???abord ??t?? constitu?? par l?????chelle locale gr??ce aux structures du terrain ; puis ?? une ??chelle r??gionale avec la constitution des ?? Mob???In r??gionaux ?? ; et enfin la repr??sentation nationale Mob???In France.
                                </Text>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                                <img
                                    className={classes.mainImage}
                                    src="/static/verbatims/Verbatim Orange7.png"
                                    alt="mobilite"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} className={classes.greyBox}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4} className={[classes.gridItem, classes.item1]}>

                                <img
                                    className={classes.mainImage}
                                    src="/static/verbatims/Verbatim Jaune-orang??14.png"
                                    alt="mobilite"
                                />
                            </Grid>
                            <Grid item xs={12} md={8} className={[classes.gridItem, classes.item2]}>
                                <Box mt={4} mb={4} className={classes.flex}>
                                    <Box mr={2}>
                                        <Icon
                                            src="/static/icons/P.ensavoirplus.png"
                                            maxWidth="30px"
                                        />
                                    </Box>
                                    <Title content="Nos valeurs" size="h5" bold letterspacing="1px" />
                                </Box>
                                <Box mt={2}>
                                    <Text size="body1" color="#000">
                                        L???association a pour objet d???<span style={{ color: "#e95e2e", fontWeight: 'bold' }}>accompagner les personnes en situation de fragilit?? vers une mobilit?? autonome et durable</span>.
                                    <br />
                                        <br />
                                        L???association Mob???In France est ind??pendante et f??d??re des associations r??gionales elles-aussi ind??pendantes dans leur fonctionnement et dans leur financement.
                                </Text>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} className={classes.gridItem}>
                            <Box mt={4} mb={4} className={classes.flex}>
                                <Box mr={2}>
                                    <Icon
                                        src="/static/icons/P.ensavoirplus.png"
                                        maxWidth="30px"
                                    />
                                </Box>
                                <Title color="#b1b3b4" content="Nos missions" size="h5" bold letterspacing="1px" />
                            </Box>
                            <Box mt={2}>
                                <Text size="body1" color="#000">
                                    <span style={{ color: "#2699b0", fontWeight: 'bold' }}>- Partager un cadre commun de valeurs et de principe d???action entre les R??gions Mob???In</span> et permettre la mutualisation des comp??tences, exp??riences, m??thodes et outils
                                    <br />
                                    <br />

                                    <span style={{ color: "#2699b0", fontWeight: 'bold' }}>- Assurer une repr??sentation nationale des Mob???In r??gionaux et des projets locaux</span> aupr??s des acteurs nationaux de la mobilit?? et des partenaires

                                    <br />
                                    <br />

                                    <span style={{ color: "#2699b0", fontWeight: 'bold' }}>- Accompagner la mise en place d???organisations r??gionales dans un cadre national coh??rent</span> et les accompagner dans leur d??veloppement et la d??finition d???une strat??gie et d???un plan d???action.

                                </Text>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                            <img
                                className={classes.mainImage}
                                src="/static/verbatims/Verbatim Bleu6.png"
                                alt="mobilite"
                            />

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default History