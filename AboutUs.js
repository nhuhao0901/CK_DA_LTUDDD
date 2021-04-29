import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


function AboutUs() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>
                    Chúng tôi có một đội ngũ thiết kế trẻ chuyên nghiệp,
                    tư duy thời trang sáng tạo, linh hoạt trong nhiều phong cách: thanh lịch, trẻ trung, năng động và gợi cảm.
                    Các nhà thiết kế của chúng tôi hiểu được quý khách hàng
                    không chỉ đang tìm kiếm những bộ trang phục đẹp và ấn tượng,
                    mà còn đang tìm kiếm một phong cách riêng cho chính mình.
                </Text>

                <ImageBackground source={require('../image/thietke1.jpg')} style={{ width: '100%', height: 360 }}></ImageBackground>

                <Text style={styles.text}>
                    {"\n"}Ngoài kiểu dáng thiết kế, chúng tôi luôn chú trọng về giá trị chất lượng vải cho từng sản phẩm.
                    Qua nhiều khâu chắt lọc với những quy chuẩn khắc khe. Chúng tôi đã tìm được sự cân bằng tốt giữa chất lượng và chi phí để sản xuất được những trang phục thiết kế đẹp,
                    chất lượng tốt cùng giá thành phù hợp với khách hàng của mình.
                </Text>

                <ImageBackground source={require('../image/thietke2.jpg')} style={{ width: '100%', height: 360 }}></ImageBackground>

                <Text style={styles.text}>
                    {"\n"}HHM luôn mong muốn, quý khách hàng sẽ cảm nhận được tâm huyết và sự chăm sóc tận tình của HHM trên từng sản phẩm.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'darkred',
        fontStyle: 'italic'
    },
});
export default AboutUs;
