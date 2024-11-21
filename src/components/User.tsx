import { useUser } from "@/hooks/useUser";
import { Text, View } from "tamagui";

export function User() {
    const user = useUser();
    return <View>
        <Text>I'm {user.name} ({user.email})</Text>
    </View>
}