import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import Avatar from "./avatar";

const overrides = {
    components: {
        ...Avatar,
    },
}

export default extendTheme(overrides)