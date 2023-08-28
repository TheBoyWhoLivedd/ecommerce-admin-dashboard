import "public/themes.css";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { ThemeWrapper } from "@/components/theme-wrapper";
export default function ThemesToggler() {
  return (

      <ThemeWrapper
        defaultTheme="zinc"
        className="relative flex flex-col items-start md:flex-row md:items-center"
      >
        <div className="md:ml-auto md:pb-0">
          <ThemeCustomizer />
        </div>
      </ThemeWrapper>
  
  );
}
