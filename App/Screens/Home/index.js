import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../Constants/Colors'
import MainServices from '../../Services/MainServices'
import ErrorPage from '../../Components/Global/ErrorPage'
import LoderComp from '../../Components/Global/LoderComp'
import ProductCard from '../../Components/Home/ProductCard'

const Home = () => {
  const [AllProducts, setAllProducts] = useState([])
  const [LoderStatus, setLoderStatus] = useState(true)
  const [ErrorStatus, setErrorStatus] = useState(false)


  function getAppProducts() {
    setLoderStatus(true)
    MainServices.getProducts()
      .then(res => {
        console.log("res", res);
        setLoderStatus(false)
        setAllProducts(res)
      })
      .catch(err => {
        console.log("err", err);
        setLoderStatus(false)
        setErrorStatus(true)
      })
  }

  useEffect(() => {
    getAppProducts()

  }, [])

  if (ErrorStatus) return <ErrorPage image={require('../../Assets/Image/no-wifi.png')} message={"No Internet Connection!"} subMessage={` 🌐 Uh-oh! It seems like you're offline. Please check your connection and try again.`} />

  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.pageBackgroundColor
    }}>
      {LoderStatus ? <LoderComp /> : <>

        <FlatList
          data={AllProducts}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => <ProductCard key={index} item={item} />}
        />
      </>}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})