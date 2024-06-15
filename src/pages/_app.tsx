// _app.tsx
import { AppProps } from "next/app";
import "@assets/css/globals.css";

import { ThemeProvider } from "next-themes";
import { useThemeSwitch } from "@hooks/useThemeSwitch";

import { Navbar } from "@components/features/Navbar";
import AudioPlayer from "@components/features/AudioPlayer";

import '@fortawesome/fontawesome-svg-core/styles.css'

import { AudioProvider, useAudioContext } from "@components/features/AudioPlayer/hooks/AudioContext";
import { AuthProvider } from "@hooks/AuthContext";
import { DefaultProvider } from "@hooks/DefaultContext";
import Modal from "@components/features/Modal";

export default function App({ Component, pageProps }: AppProps) {
    const { theme } = useThemeSwitch();

    return (
        <ThemeProvider attribute="class" defaultTheme={theme}>
            <AuthProvider>
                <DefaultProvider>
                    <AudioProvider>
                        <div className="flex flex-col min-h-screen">
                            <Navbar />
                            <MainContent className="flex-1 h-full">
                                <Component {...pageProps} />
                            </MainContent>
                            <AudioPlayer />
                            <Modal />
                        </div>
                    </AudioProvider>
                </DefaultProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

function MainContent({ children, className }: { children: React.ReactNode; className?: string }) {
    const { mainContentRef } = useAudioContext();

    return (
        <main ref={mainContentRef} className={className}>
            {children}
        </main>
    )
}