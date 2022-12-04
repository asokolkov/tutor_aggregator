import {createMultiStyleConfigHelpers} from "@chakra-ui/react";
import {avatarAnatomy} from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(avatarAnatomy.keys);

const baseStyle = definePartsStyle({
    container: {
        border: '2px solid',
        color: 'blue.300'
    },
});

const avatarTheme = defineMultiStyleConfig({ baseStyle });

const avatarToExport = {Avatar: avatarTheme};
export default avatarToExport;