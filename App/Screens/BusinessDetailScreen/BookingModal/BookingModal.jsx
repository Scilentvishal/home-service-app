import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import PageHeading from "../../../Components/PageHeading";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../../Utils/Colors";
import Heading from "../../../Components/Heading";

export default function BookingModal({ setShowModel }) {
  const [timeList, setTimeList] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };

  return (
    <View style={{ padding: 15 }}>
      <View style={{ marginBottom: 15 }}>
        <PageHeading title="Booking" onClick={() => setShowModel(false)} />
      </View>

      {/* calendar picker */}
      <Heading text="Select Date" />
      <View style={styles.calendarContainer}>
        <CalendarPicker
          width={300}
          onDateChange={setSelectedDate}
          minDate={Date.now()}
          todayBackgroundColor={Colors.PRIMARY}
          todayTextStyle={{ color: Colors.WHITE }}
          selectedDayColor={Colors.BLACK}
          selectedDayTextColor={Colors.WHITE}
        />
      </View>

      {/* Time Select Section  */}

      <View style={{ paddingVertical: 10 }}>
        <Heading text="Select Time Slot" />
        <FlatList
          data={timeList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => setSelectedTime(item.time)}
            >
              <Text
                style={[
                  selectedTime == item.time
                    ? styles.selectedTime
                    : styles.unselectedTime,
                ]}
              >
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 15,
    borderRadius: 15,
  },
  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
  },
  unselectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    color: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
  },
});
