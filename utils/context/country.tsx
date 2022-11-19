import { createContext, useContext, ReactNode, useState } from "react";
import { Country } from "../typings/context";

export const CountryContext = createContext<Country>({language: "us"});

export const useCountry = () => useContext(CountryContext);

export interface ChildrenProps {
	children?: ReactNode
}

export const CountryProvider = (props: ChildrenProps) => {
	const { children } = props

	const [language, setLanguage] = useState<string>("us")
	
	const toggleLanguage = () => {
		if (language === "us") {
			setLanguage("fr")
		} else {
			setLanguage("us")
		}
	}

	return (
		<CountryContext.Provider value={{language, toggle: toggleLanguage}}>
			{children}
		</CountryContext.Provider>
	)
}