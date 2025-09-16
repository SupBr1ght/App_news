import { forwardRef } from "react";
import {
	Link as RouterLink,
	type LinkProps as RouterLinkProps,
} from "react-router-dom";
import {
	Link as ChakraLink,
	type LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

export type AppLinkProps = RouterLinkProps & ChakraLinkProps;

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
	(props, ref) => {
		return <ChakraLink as={RouterLink} ref={ref} {...props} />;
	},
);
