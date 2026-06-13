export interface BaseFilterOptionType {
   value: string;
   label: string;
   icon?: string;
}

// 🎯 Constraint: Lock special options to *only* these literal strings
export interface SpecialOptionType extends BaseFilterOptionType {
   value: "legendary" | "mythical";
}

// 🎨 Extension: Types need the exact same layout + a mandatory hex color string
export interface TypeOptionType extends BaseFilterOptionType {
   hex: string;
}
