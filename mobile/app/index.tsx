import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useClerk } from '@clerk/clerk-expo'

const Index = () => {
    const {signOut} = useClerk()
  return (
    <View>
      <Text>Index</Text>
      <Button title='Sign Out' onPress={()=>{
        signOut()
      }} />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})