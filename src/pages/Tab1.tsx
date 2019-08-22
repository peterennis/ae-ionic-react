import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

const Tab1: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home 4.8.0-rc.1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src="/assets/corin.png" alt="" />
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle></IonCardSubtitle>
            <IonCardTitle>Welcome</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p></p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Tab1;
