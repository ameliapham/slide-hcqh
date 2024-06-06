import { createContext, useContext, useState, useCallback, useEffect } from "react";


type FullscreenContextType = {
    isFullscreen: boolean;
    enterFullscreen: () => void;
    exitFullscreen: () => void;
};

const FullscreenContext = createContext<FullscreenContextType | undefined>(undefined);

export function useFullscreen(): FullscreenContextType {
    const context = useContext(FullscreenContext);
    if (!context) {
        throw new Error('useFullscreen must be used within a FullscreenProvider');
    }
    return context;
}

type FullscreenProviderProps = {
    children: React.ReactNode;
};

export function FullscreenProvider(props: FullscreenProviderProps) {
    const { children } = props;
    const [isFullscreen, setIsFullscreen] = useState(false);

    const enterFullscreen = useCallback(() => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen().then(() => setIsFullscreen(true));
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen().then(() => setIsFullscreen(true));
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen().then(() => setIsFullscreen(true));
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen().then(() => setIsFullscreen(true));
        }
    }, []);


    const exitFullscreen = useCallback(() => {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => setIsFullscreen(false));
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen().then(() => setIsFullscreen(false));
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen().then(() => setIsFullscreen(false));
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen().then(() => setIsFullscreen(false));
        }
    }, []);

    const handleFullscreenChange = useCallback(() => {
        const isFullscreenNow = Boolean(
          document.fullscreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).mozFullScreenElement ||
          (document as any).msFullscreenElement
        );
        setIsFullscreen(isFullscreenNow);
      }, []);
    
      useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
        return () => {
          document.removeEventListener('fullscreenchange', handleFullscreenChange);
          document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
          document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
          document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
      }, [handleFullscreenChange]);

    return (
        <FullscreenContext.Provider value={{ isFullscreen, enterFullscreen, exitFullscreen }}>
            {children}
        </FullscreenContext.Provider>
    );
}