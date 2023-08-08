import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants';


const Footer = ({ url }) => {
  const [likeJob, setLikeJob] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.likeBtn}
        onPress={() => setLikeJob(!likeJob)}
      >
        <Image 
          source={likeJob
            ? icons.heart
            : icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply Now!</Text>
      </TouchableOpacity>

      
    </View>
  )
}

export default Footer