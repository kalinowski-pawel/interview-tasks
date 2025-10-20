import React, {createContext} from 'react';

interface ThemeProps {
    theme?: string
    prefix?: string
}
export const ThemeContext = createContext<ThemeProps>({
    theme: 'default',
});

export const ThemeProvider = ({
  children,
  theme = 'default',
  prefix = 'ds'
}: ThemeProps & {children: React.ReactNode}) => {
    return (
        <ThemeContext.Provider value={{ theme }}>
            <div className={`${theme} ${prefix}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}