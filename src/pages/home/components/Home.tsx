import CardMusicDeck from "@components/features/CardMusicDeck";
import { Section, SectionHeader } from "@components/shared/Section";
import SearchBar from "./SearchBar";
import { useSearchContext } from "./SearchContext";

export default function HomeWrap() {
    const { displayedTracks, displayedFilters, displayedPlaylists } = useSearchContext()

    return (
        <>
            <Section className="px-8">
                <SearchBar />
            </Section>

            <Section>
                <SectionHeader>Descubra sua música favorita.</SectionHeader>
                <CardMusicDeck cardMusics={displayedTracks} notFoundMessage="Nenhuma música encontrada." />
            </Section>

            <Section>
                <SectionHeader>Gêneros musicais.</SectionHeader>
                <CardMusicDeck cardMusics={displayedFilters} notFoundMessage="Nenhum gênero encontrado." />
            </Section>

            <Section>
                <SectionHeader>Playlists.</SectionHeader>
                <CardMusicDeck cardMusics={displayedPlaylists} notFoundMessage="Nenhuma playlist encontrada." />
            </Section>
        </>
    );
}