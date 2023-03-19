import theme from "./Theme";

export const device = {
	sm_phone: `(max-width: ${theme.breakpoints.sm_phone})`,
	md_phone: `(max-width: ${theme.breakpoints.md_phone})`,
	phone: `(max-width: ${theme.breakpoints.phone})`,
	lg_phone: `(max-width: ${theme.breakpoints.lg_phone})`,

	sm_tablet: `(max-width: ${theme.breakpoints.sm_tablet})`,
	md_tablet: `(max-width: ${theme.breakpoints.md_tablet})`,
	tablet: `(max-width: ${theme.breakpoints.tablet})`,

	sm_desktop: `(max-width: ${theme.breakpoints.sm_desktop})`,
	md_desktop: `(max-width: ${theme.breakpoints.md_desktop})`,
	desktop: `(max-width: ${theme.breakpoints.desktop})`,
};
