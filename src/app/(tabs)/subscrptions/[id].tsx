import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();

    return (
        <View className="flex-1 bg-gray-50 p-6">
            <View className="rounded-2xl bg-white p-6 shadow-sm">
                <Text className="mb-2 text-2xl font-bold text-gray-900">
                    Subscription Details
                </Text>

                <Text className="mb-6 text-base text-gray-600">
                    Subscription ID: {id}
                </Text>

                <Pressable
                    onPress={() => router.back()}
                    className="items-center rounded-xl bg-green-600 px-5 py-3 active:bg-green-700"
                >
                    <Text className="text-base font-semibold text-white">
                        Go Back
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SubscriptionDetails;