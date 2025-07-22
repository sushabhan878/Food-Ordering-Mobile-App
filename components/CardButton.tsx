import { images } from '@/constants'
import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export class CardButton extends Component {
    
    render() {
      const totalitems = 10
    return (
        <TouchableOpacity className='cart-btn' onPress={() => {
            
        }}>
            <Image source={images.bag} alt='bag' className='size-5' resizeMode='contain' />
            {totalitems > 0 && (
                <View className='cart-badge'>
                    <Text className='small-bold text-white'>{ totalitems}</Text>

                </View>
            )}
      </TouchableOpacity>
    )
  }
}

export default CardButton
