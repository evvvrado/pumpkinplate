import theme from "./Theme";

export const device = {
	sm_phone: `(max-width: ${theme.breakpoints.sm_phone})`,
	md_phone: `(max-width: ${theme.breakpoints.md_phone})`,
	phone: `(max-width: ${theme.breakpoints.phone})`,
	sm_tablet: `(max-width: ${theme.breakpoints.sm_tablet})`,
	tablet: `(max-width: ${theme.breakpoints.tablet})`,
	sm_desktop: `(max-width: ${theme.breakpoints.sm_desktop})`,
	desktop: `(max-width: ${theme.breakpoints.desktop})`,
};

export const reverseDevice = {
	sm_phone: `(min-width: ${theme.breakpoints.sm_phone})`,
	md_phone: `(min-width: ${theme.breakpoints.md_phone})`,
	phone: `(min-width: ${theme.breakpoints.phone})`,
	sm_tablet: `(min-width: ${theme.breakpoints.sm_tablet})`,
	tablet: `(min-width: ${theme.breakpoints.tablet})`,
	sm_desktop: `(min-width: ${theme.breakpoints.sm_desktop})`,
	desktop: `(min-width: ${theme.breakpoints.desktop})`,
};
