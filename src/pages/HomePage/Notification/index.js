import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import {
  Container,
  NotificationList,
  NotificationItem,
  Title,
  Description,
} from './styles';

import api from '~/services/api';

import Background from '~/components/Background';

export default function Notification({ navigation }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotifications() {
      const aquariumInfo = navigation.getParam('aquarium');

      const response = await api.get(
        `/notification-microservice/notification/${aquariumInfo.name}`
      );

      setNotifications(response.data.result);
      setLoading(false);
    }

    loadNotifications();
  }, [navigation]);

  return (
    <Background>
      <Container>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color="#FFF" />
          </View>
        ) : (
          <NotificationList
            data={notifications}
            keyExtractor={notification => String(notification._id)}
            renderItem={({ item: notification }) => (
              <NotificationItem>
                <Title>{notification.title}</Title>
                <Description>{notification.description}</Description>
              </NotificationItem>
            )}
            showsHorizontalScrollIndicator={false}
            numColumns={1}
          />
        )}
      </Container>
    </Background>
  );
}

Notification.navigationOptions = () => ({
  title: 'Notificações',
});
