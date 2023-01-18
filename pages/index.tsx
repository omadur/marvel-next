import apiMarvel from "@/api/apiMarvel";
import CharacterCard from "@/components/interface/CharacterCard";
import Navbar from "@/components/interface/Navbar";
import SwitchTheme from "@/components/interface/SwitchTheme";
import { Grid } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import MainLayout from "../components/layout/MainLayout";
import Results, { Welcome } from "../interfaces/characters";



interface Props {
  characters: Results[]
}

const Home: NextPage<Props> = ({ characters }) => {
  return (
    <MainLayout>
      <SwitchTheme />
      <Navbar />
      <Grid.Container gap={2}>
        {characters.map(character => (
          <CharacterCard character={character} />
        ))}
      </Grid.Container>
      <Grid.Container gap={2} justify="flex-start">
      </Grid.Container>
    </MainLayout>
  );
}

export default Home



export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await apiMarvel.get<Welcome>("/characters?ts=1&apikey=e3085ad23de18c3e8ae97266e95176b7&hash=f10beff311a825ba38e72c5d1c668374");

  const characters: Results[] = data.data.results.map(character => (
    character
  ))

  return { props: { characters: characters } };
}
