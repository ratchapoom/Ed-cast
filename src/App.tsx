import { Grid, GridItem } from "@chakra-ui/react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
                    "main main"
                    "footer footer"`}
      gridTemplateColumns={"150px 1fr"}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <Main />
      </GridItem>
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
}

export default App;
