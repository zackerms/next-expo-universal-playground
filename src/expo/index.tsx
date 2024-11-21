import { User } from "@/components/User";
import { Text, View } from "tamagui";

export default function HomeScreen() {
    return (
        <View>
            <Text>Hello from Expo</Text>
            <User />
        </View>
    );
}