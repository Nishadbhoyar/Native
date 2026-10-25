import "../../../global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>

            <Link
                href="/Onboarding"
                className="mt-4 rounded bg-primary p-4 text-white"
            >
                GO to Onboarding
            </Link>

            <Link
                href="/(auth)/sign-up"
                className="mt-4 rounded bg-primary p-4 text-white"
            >
                Sign-up page
            </Link>

            <Link
                href="/(auth)/sign-in"
                className="mt-4 rounded bg-primary p-4 text-white"
            >
                Sign-in page
            </Link>

            <Link
                href={{
                    pathname: "/subscrptions/[id]",
                    params: { id: "spotify" },
                }}
                className="mt-4"
            >
                Spotify Subscriptions
            </Link>

            <Link
                href={{
                    pathname: "/subscrptions/[id]",
                    params: { id: "claude" },
                }}
                className="mt-4"
            >
                Claude Max Subscription
            </Link>
        </View>
    );
}