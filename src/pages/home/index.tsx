import HomeWrap from "./components/Home";
import { SearchProvider } from "./components/SearchContext";


export default function Home() {
    return (
        <SearchProvider>
            <HomeWrap />
        </SearchProvider>
    );
}
