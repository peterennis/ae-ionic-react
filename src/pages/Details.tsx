import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Details: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Details</p>
      </IonContent>
    </>
  );
};

export default Details;
