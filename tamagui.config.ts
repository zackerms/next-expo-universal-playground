import { config as configBase } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";

const tamaguiConfig = createTamagui(configBase);

export default tamaguiConfig;

export type AppConfig = typeof tamaguiConfig;

declare module "tamagui" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface TamaguiCustomConfig extends AppConfig {}
}