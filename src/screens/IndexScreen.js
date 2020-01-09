import React, { useContext } from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen=()=>{

    const {blogPost, addBlogPost }=useContext(BlogContext)
    return(
        <View>
            <Text>Inside IndexScreen</Text>
            <Button title='Add Blog' onPress={addBlogPost}/>
            <FlatList
             data={blogPost}
             keyExtractor={blogPost=>blogPost}
             renderItem={({item})=>{
                 return <Text>{item.title}</Text>
             }}
            />
        </View>
    )
}

const styles=StyleSheet.create({})

export default IndexScreen;
