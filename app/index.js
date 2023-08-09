import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

import useFetch from "../hook/useFetch";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, error } = useFetch('search', { query: 'React Developer', num_pages: 2 });
    
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }} >
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: ''
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if(searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          <Popularjobs data={data.slice(0,10)} isLoading={isLoading} error={error} />
          <Nearbyjobs data={data.slice(10)} isLoading={isLoading} error={error} />

        </View>

      </ScrollView>


    </SafeAreaView>
  )
}

export default Home;